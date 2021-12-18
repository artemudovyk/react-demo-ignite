// Media resize
// https://media.rawg.io/media/games/193/193c9fe23ca026914fdf41d551ff3df9.jpg

export function getResizedImageUrl(imageUrl, widthPx) {
    const regexMediaGames = /\/media\/games\//;
    const regexMediaScreenshots = /\/media\/screenshots\//;

    if (imageUrl.match(regexMediaGames)) {
        return imageUrl.replace('/media/games/', `/media/resize/${widthPx}/-/games/`);
    } else if (imageUrl.match(regexMediaScreenshots)) {
        return imageUrl.replace('/media/screenshots/', `/media/resize/${widthPx}/-/screenshots/`);
    }

    return imageUrl;
}
