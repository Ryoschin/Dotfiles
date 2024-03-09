#!/bin/sh

mc="" # Your file explorer
config="/home/" # Your .config directory
user="/home/" # Your /home/user/ directory
downloads=""
programming=""
bin=""
pictures=""

explorer() {
    kitty "$mc" "$@"  # Use quotes for potential spaces in arguments
}


if [[ $# -eq 0 ]]; then  # Check for no arguments
    kitty "$config"
    return
fi

case "$1" in
    "firefox")
        firefox ;;
    "discord")
        Discord ;;
    "neovim")
        kitty bash -c "nvim $config; bash" ;;
    "blender")
        blender ;;
    "gimp")
        gimp ;;
    "lutris")
        nohup bash -c "lutris" & ;;
    "libre"|"libreoffice")
        libreoffice ;;
    "music")
        youtube-music ;;
    "thunderbird")
        thunderbird ;;
    "user")
        explorer "$user" ;;
    "disk")
        explorer / ;;
    "downloads")
        explorer "$downloads" ;;
    "programming")
        kitty bash -c "cd $programming && nvim; bash" ;;
    "cfbin")
        kitty bash -c "cd $bin && nvim; bash" ;;
    "cf"|"config")
        explorer "$config" ;;
    "pictures")
        explorer "$pictures" ;;
    *)
        echo 'No known patterns matched' ;;
esac
