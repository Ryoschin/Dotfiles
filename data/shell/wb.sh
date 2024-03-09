#!/bin/sh

browser="qutebrowser" # Your default browser

if [[ $# -eq 0 ]]; then
    "$browser"
    return
fi

case "$1" in
    "yt"|"youtube")
        "$browser" "https://www.youtube.com/" ;;
    "github")
        "$browser" "https://github.com/" ;;
    "reddit")
        "$browser" "https://www.reddit.com/" ;;
    "twitch")
        "$browser" "https://www.twitch.tv/" ;;
    *)
        echo 'No known patterns matched' ;;
esac
