const ImageKit = require('@imagekit/nodejs')

const client = new ImageKit({
  privateKey: process.env.IMAGE_KIT,
});

async function getURI(file){
    const response = await client.files.upload({
        file,
        fileName: 'music_' + Date.now(),
        folder: "first-backend-artist/music"
    });
    return response
}

module.exports = getURI