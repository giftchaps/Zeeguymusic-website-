param(
    [Parameter(Mandatory=$true)]
    [string]$InputFile
)

# Check if FFmpeg is installed
try {
    $ffmpegVersion = ffmpeg -version
} catch {
    Write-Host "FFmpeg is not installed. Please install FFmpeg first."
    Write-Host "You can download it from: https://ffmpeg.org/download.html"
    exit 1
}

$OutputDir = "public/videos"
$BaseName = [System.IO.Path]::GetFileNameWithoutExtension($InputFile)

# Create output directory if it doesn't exist
if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir | Out-Null
}

# Optimize MP4 version (H.264)
ffmpeg -i $InputFile `
    -c:v libx264 -crf 23 -preset medium `
    -c:a aac -b:a 128k `
    -movflags +faststart `
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" `
    "$OutputDir/${BaseName}.mp4"

# Create WebM version (VP9)
ffmpeg -i $InputFile `
    -c:v libvpx-vp9 -crf 30 -b:v 0 `
    -c:a libopus -b:a 128k `
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" `
    "$OutputDir/${BaseName}.webm"

Write-Host "Video optimization complete!"
Write-Host "MP4 file: $OutputDir/${BaseName}.mp4"
Write-Host "WebM file: $OutputDir/${BaseName}.webm" 