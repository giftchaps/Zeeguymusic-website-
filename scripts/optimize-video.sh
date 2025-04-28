#!/bin/bash

# Check if input file is provided
if [ -z "$1" ]; then
    echo "Usage: ./optimize-video.sh <input_video>"
    exit 1
fi

INPUT_FILE="$1"
OUTPUT_DIR="public/videos"
BASE_NAME=$(basename "$INPUT_FILE" .mp4)

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Optimize MP4 version (H.264)
ffmpeg -i "$INPUT_FILE" \
    -c:v libx264 -crf 23 -preset medium \
    -c:a aac -b:a 128k \
    -movflags +faststart \
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
    "$OUTPUT_DIR/${BASE_NAME}.mp4"

# Create WebM version (VP9)
ffmpeg -i "$INPUT_FILE" \
    -c:v libvpx-vp9 -crf 30 -b:v 0 \
    -c:a libopus -b:a 128k \
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
    "$OUTPUT_DIR/${BASE_NAME}.webm"

echo "Video optimization complete!"
echo "MP4 file: $OUTPUT_DIR/${BASE_NAME}.mp4"
echo "WebM file: $OUTPUT_DIR/${BASE_NAME}.webm" 