# Script para monitorar e publicar artigos da pasta revisados/

param(
    [switch]$Once,
    [switch]$DryRun
)

$revisadosDir = "D:\guia-de-defesa\revisados"
$postsDir = "D:\guia-de-defesa\src\content\posts"
$projectRoot = "D:\guia-de-defesa"

function Publicar-Artigo {
    param([string]$arquivo)

    $nomeArquivo = Split-Path -Leaf $arquivo
    $destino = Join-Path $postsDir $nomeArquivo

    Write-Host "Publicando: $nomeArquivo" -ForegroundColor Cyan

    if ($DryRun) {
        Write-Host "   [DRY RUN] Mover de: $arquivo"
        Write-Host "   [DRY RUN] Para: $destino"
        return
    }

    # Mover arquivo
    Copy-Item $arquivo $destino -Force

    # Remover draft: true
    $conteudo = Get-Content $destino -Raw -Encoding UTF8
    $conteudo = $conteudo -replace 'draft:\s*true', 'draft: false'
    Set-Content $destino $conteudo -Encoding UTF8

    # Commit (caminho relativo ao repo, nao so o nome do arquivo)
    Push-Location $projectRoot
    $caminhoRelativo = "src/content/posts/$nomeArquivo"
    git add $caminhoRelativo
    git commit -m "publish: $nomeArquivo" | Out-Null
    $commitOk = $LASTEXITCODE -eq 0
    Pop-Location

    if (-not $commitOk) {
        Write-Host "   ERRO: commit falhou. Artigo NAO removido de revisados/ para voce conferir." -ForegroundColor Red
        return
    }

    # Remover do revisados (so depois de confirmar que o commit deu certo)
    Remove-Item $arquivo -Force

    Write-Host "   OK: Publicado e commitado" -ForegroundColor Green
    Write-Host "   ATENCAO: Verificar retro-linkagem em artigos relacionados" -ForegroundColor Yellow

    return $nomeArquivo
}

function Monitorar-E-Publicar {
    $ultimosArquivos = @{}

    Write-Host "Monitorando: $revisadosDir" -ForegroundColor Cyan
    Write-Host "   Intervalo: 24 horas (ou execute com -Once)" -ForegroundColor Gray

    do {
        if (Test-Path $revisadosDir) {
            $arquivos = Get-ChildItem -Path $revisadosDir -Filter "*.mdx" -ErrorAction SilentlyContinue

            if ($arquivos) {
                Write-Host ""
                Write-Host "$(Get-Date -Format 'HH:mm:ss') - Verificando..." -ForegroundColor Gray

                foreach ($arquivo in $arquivos) {
                    $chave = $arquivo.FullName

                    if (-not $ultimosArquivos.ContainsKey($chave)) {
                        Publicar-Artigo -arquivo $arquivo.FullName
                        $ultimosArquivos[$chave] = $true
                    }
                }
            }
        }

        if ($Once) { break }

        # Aguardar 24 horas
        Write-Host ""
        Write-Host "Aguardando proxima verificacao em 24h..." -ForegroundColor Gray
        Start-Sleep -Seconds 86400

    } while ($true)
}

# Executar
if ($Once) {
    Write-Host "Modo: Once (uma unica verificacao)" -ForegroundColor Gray
}
if ($DryRun) {
    Write-Host "Modo: DRY RUN (sem fazer alteracoes)" -ForegroundColor Yellow
}

Monitorar-E-Publicar
