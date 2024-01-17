require ('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const images =[
    './images/books/At_All_Costs.webp',
    './src/api/images/books/At_All_Costs.webp',
    './src/api/images/books/Crown_of_slaves_cover.webp',
    './src/api/images/books/Echoes_of_honor.webp',
    './src/api/images/books/Field_of_Dishonor.webp',
    './src/api/images/books/Flag_in_exile.webp',
    './src/api/images/books/HH9_Ashes_of_Victory_cover.webp',
    './src/api/images/books/HH12_Mission_of_Honor_cover1.webp',
    './src/api/images/books/HH13_cover_01.webp',
    './src/api/images/books/HH14_cover_01 - copia.webp',
    './src/api/images/books/Honor_Among_Enemies.webp',
    './src/api/images/books/In_enemy_hands.webp',
    './src/api/images/books/On_Basilisk_Station.webp',
    './src/api/images/books/Shadow_of_Freedom_29.webp',
    './src/api/images/books/Shadow_of_Victory_cover_01.webp',
    './src/api/images/books/Storm_from_the_Shadows.webp',
    './src/api/images/books/The_Honor_of_the_Queen.webp',
    './src/api/images/books/The_Shadow_of_Saganami.webp',
    './src/api/images/books/The_Short_Victorious_War - copia.webp',
    './src/api/images/books/ToEndInFire.webp',
    './src/api/images/books/Torch_of_Freedom_Front_Cover.webp',
    './src/api/images/books/War_of_honor.webp',
    './src/api/images/characters/Andrew Lafollet.webp',
    './src/api/images/characters/Anisimovna.webp',
    './src/api/images/characters/Benjamin_IX_box_image.PNG.webp',
    './src/api/images/characters/ElizabethIII.webp',
    './src/api/images/characters/Hamish_Alexander.webp',
    './src/api/images/characters/Honor Harrington - copia.webp',
    './src/api/images/characters/Horace_Harkness_01.webp',
    './src/api/images/characters/Lester Tourville.webp',
    './src/api/images/characters/Thomas Theisman.jpg',
    './src/api/images/countries/Confederacion Silesiana.png',
    './src/api/images/countries/Imperio Andermany.jpg',
    './src/api/images/countries/Liga Solariana.webp',
    './src/api/images/countries/Protectorado de Grayson.png',
    './src/api/images/countries/Reino de Manticora.webp',
    './src/api/images/countries/Republica de Monica.jpg',
    './src/api/images/countries/Republica Popular de Haven.webp',
    './src/api/images/planets/Beowulf.webp',
    './src/api/images/planets/Grayson.webp',
    './src/api/images/planets/Gryphon.jpeg',
    './src/api/images/planets/manticore.jpg',
    './src/api/images/planets/Medusa_.webp',
    './src/api/images/planets/Mesa.jpg',
    './src/api/images/planets/San Martin.webp',
    './src/api/images/planets/Sphinx.webp',
    './src/api/images/planets/The_Earth.webp',
    './src/api/images/books/Cauldron_of_Ghosts.webp',
    './src/api/images/countries/Erewhon.png',
    './src/api/images/planets/beowulf2.webp',
    './src/api/images/planets/haven.webp',
    './src/api/images/planets/mesa2.png',
    './src/api/images/planets/MAP HONORVERSE.png',
    './src/api/images/planetshonor_among_enemies_2_by_genkkis_d5c6lhm-fullview.jpg',
    './src/api/images/planets\honor_among_enemies_by_genkkis_d4oukwq-fullview.jpg',
    './src/api/images/planetshonor_harrington___a_rising_thunder_1_by_genkkis_d5mq2mm-fullview.jpg',
    './src/api/images/planetshonor_harrington_at_all_costs1_by_genkkis_d2mtzi5-fullview.jpg',
    './src/api/images/planetshonor_harrington_at_all_costs2_by_genkkis_d2mtzpy-fullview.jpg',
    './src/api/images/planetshonor_harrington_flag_in_exile_by_genkkis-d2mty9d.jpg',
    './src/api/images/planetshonor_harrington_the_honor_of_the_queen_by_genkkis_d87jeme-fullview.jpg',
    './src/api/images/planetshonor_harrington_war_of_honor1_by_genkkis_d2mtysi-fullview.jpg'
];

// (async function run () {
//     for (image of images){
//     const result  =await cloudinary.uploader.upload(image);
//     console.log(result.secure.url);
// }
// })();

const image =  './src/api/images/planetshonor_harrington_war_of_honor1_by_genkkis_d2mtysi-fullview.jpg'
cloudinary.uploader.upload(image).then(result => {
    console.log(result);
})

