
// Data de los restaurantes(tipo de comida por paises)
var restaurants = {
  'comida argentina': [
    {url: 'a.costumbres.argentina1.png',
      name: 'Costumbres Argentinas',
      map: '<iframe class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7139664373262!2d-77.02021668573141!3d-12.131712746788308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7fdba135dcf%3A0x2a09ac470411ad13!2sCostumbres+Argentinas!5e0!3m2!1ses!2spe!4v1514730840174" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://costumbresargentinas.com.pe/',
      indications: 'https://www.google.com.pe/maps/dir/""/costumbres+argentinas/data=!4m5!4m4!1m0!1m2!1m1!1s0x9105b7fdba135dcf:0x2a09ac470411ad13?sa=X&ved=0ahUKEwjyr73607PYAhUFct8KHUmDADEQ9RcIyQEwCw',
      address: 'Av. República de Panamá 6562, Barranco',
      phone: '(01) 4441581',
      reservations: 'http://costumbresargentinas.com.pe/'},
    {url: 'a.el10.argentina2.png',
      name: 'El 10 Carnes y Vinos',
      map: '<iframe class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15604.210036535893!2d-77.03827963022465!3d-12.108557899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c814cf4930d1%3A0x7e8722361d933e80!2sEl+10+Carnes+Y+Vinos!5e0!3m2!1ses!2spe!4v1514736366426" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://www.el10.pe/',
      indications: 'https://www.google.com.pe/maps/dir//El+10+Carnes+Y+Vinos,+Av.+Petit+Thouars+4599,+Miraflores+15046/@-12.1085579,-77.0382796,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c814cf4930d1:0x7e8722361d933e80!2m2!1d-77.0295249!2d-12.1085579',
      address: 'Av. Petit Thouars 4599, Miraflores 15046',
      phone: '(01) 7176610',
      reservations: 'https://www.el10.pe/reservas.php'},
    {url: 'a.tranquera.argentina3.png',
      name: 'La Tranquera BBQ',
      map: '<iframe class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15603.229241023326!2d-77.02993764078302!3d-12.12533278493924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8182732a075%3A0x90e9ec8f52b4c531!2sLa+Tranquera+BBQ!5e0!3m2!1ses!2spe!4v1514736710725" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://www.restaurantelatranquera.com/',
      indications: 'https://www.google.com.pe/maps/dir//La+Tranquera+BBQ,+Av.+Jos%C3%A9+Pardo+285,+Miraflores+15074/@-12.1253328,-77.0299376,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c8182732a075:0x90e9ec8f52b4c531!2m2!1d-77.0316267!2d-12.1192432',
      address: 'Av. José Pardo 285, Miraflores 15074',
      phone: '(01) 4475111',
      reservations: 'http://www.restaurantelatranquera.com/'},
    {url: 'a.vacaloca.argentina4.png',
      name: 'La Vaca Loca',
      map: '<iframe class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15603.23171197903!2d-77.02993764402633!3d-12.125290552052755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7e03588caed%3A0x5e529989472b0b0a!2sLa+Vaca+Loca!5e0!3m2!1ses!2spe!4v1514736924178" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://www.lavacaloca.pe/',
      indications: 'https://www.google.com.pe/maps/dir//La+Vaca+Loca,+Larcomar,+C.C+18,,+Malec%C3%B3n+de+la+Reserva+610,+Miraflores+Lima+18/@-12.1252906,-77.0299376,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105b7e03588caed:0x5e529989472b0b0a!2m2!1d-77.0307699!2d-12.1316641',
      address: 'Larcomar, C.C 18, Malecón de la Reserva 610, Miraflores Lima 18',
      phone: '(01) 7119898',
      reservations: 'https://lima.restorando.com.pe/restaurante/la-vaca-loca?utm_campaign=place-actions&utm_medium=organic&utm_source=google'}
  ],
  'comida peruana': [
    {url: 'b.aromasperuanos.peru1.png',
      name: 'Aromas Peruanos',
      map: '<iframe class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.191182460743!2d-77.01525468573189!3d-12.099060646168418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c877ac11be63%3A0x26764ba130df3487!2sAromas+Peruanos!5e0!3m2!1ses!2spe!4v1514737107243" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'https://aromasperuanos.com/web/',
      indications: 'https://www.google.com.pe/maps/dir//Aromas+Peruanos,+Av.+Guardia+Civil+856,+San+Isidro+15036/@-12.0990606,-77.0152547,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c877ac11be63:0x26764ba130df3487!2m2!1d-77.013066!2d-12.0990659',
      address: 'Av. Guardia Civil 856, San Isidro 15036',
      phone: '(01) 2241482',
      reservations: 'http://lima.restorando.com.pe/restaurante/aromas-peruanos?utm_version=emmett&utm_campaign=place-actions&utm_medium=organic&utm_source=google'},
    {url: 'b.panchita.peru2.png',
      name: 'Panchita',
      map: '<iframe  class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.9156349510317!2d-77.03352868573164!3d-12.11792474652636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81797728d45%3A0x7bd7379c9cb86aa8!2sPanchita+-+Miraflores!5e0!3m2!1ses!2spe!4v1514737246838" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://panchita.pe/',
      indications: 'https://www.google.com.pe/maps/dir//Panchita+-+Miraflores,+Calle+2+de+Mayo+298,+Miraflores+15074/@-12.1179247,-77.0335287,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c81797728d45:0x7bd7379c9cb86aa8!2m2!1d-77.03134!2d-12.11793',
      address: 'Calle 2 de Mayo 298, Miraflores 15074',
      phone: '(01) 2425957',
      reservations: 'http://panchita.pe/'},
    {url: 'b.rosita.peru3.png',
      name: 'Rosita',
      map: '<iframe  class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d124863.23737196512!2d-77.08252185112028!3d-12.0451606629569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!3e6!4m0!4m4!1s0x9105c8aa260e140d%3A0x84114193c3ada2f6!3m2!1d-12.045169399999999!2d-77.01248129999999!5e0!3m2!1ses!2spe!4v1514737912705" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://www.',
      indications: 'https://www.google.com.pe/maps/dir/""/""/data=!4m5!4m4!1m0!1m2!1m1!1s0x9105c8aa260e140d:0x84114193c3ada2f6?sa=X&ved=0ahUKEwi689GF1rTYAhUSMd8KHTWSAMAQ9RcICjAA',
      address: 'Av. Sebastian Lorente 310, Cercado de Lima 15003',
      phone: 'No tiene',
      reservations: 'http://www.'},
    {url: 'b.señoriosulco.peru4.png',
      name: 'El Señorío de Sulco',
      map: '<iframe  class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8899504241776!2d-77.04612668573154!3d-12.11968164655974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c83aad77b8dd%3A0x348a0c7d016c2ad3!2zRWwgU2XDsW9yw61vIGRlIFN1bGNv!5e0!3m2!1ses!2spe!4v1514738120650" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://www.senoriodesulco.com/',
      indications: 'https://www.google.com.pe/maps/dir//El+Se%C3%B1or%C3%ADo+de+Sulco,+Malec%C3%B3n+Cisneros+1470,+Miraflores+15074/@-12.1196816,-77.0461267,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c83aad77b8dd:0x348a0c7d016c2ad3!2m2!1d-77.043938!2d-12.1196869',
      address: 'Malecón Cisneros 1470, Miraflores 15074',
      phone: '(01) 4410183',
      reservations: 'http://lima.restorando.com.pe/restaurante/el-senorio-de-sulco?utm_version=emmett&utm_campaign=place-actions&utm_medium=organic&utm_source=google'},
  ],
  'comida mexicana': [
    {url: 'c.aguaparachocolate.mexico1.png',
      name: 'Como Agua para Chocolate',
      map: '<iframe class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124829.88111945873!2d-77.10138173143022!3d-12.116683077617454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c842cdcb6a2d%3A0x6c6904bb3114f66a!2sComo+Agua+para+Chocolate!5e0!3m2!1ses!2spe!4v1514738342867" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://www.',
      indications: 'https://www.google.com.pe/maps/dir//Como+Agua+para+Chocolate,+Pancho+Fierro+108,+San+Isidro+15073/@-12.1166831,-77.1013817,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c842cdcb6a2d:0x6c6904bb3114f66a!2m2!1d-77.0354469!2d-12.096938',
      address: 'Pancho Fierro 108, San Isidro 15073',
      phone: '(01) 2220297',
      reservations: 'http://www.'},
    {url: 'c.chingatutaco.mexico2.png',
      name: 'Chinga tu Taco',
      map: '<iframe class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124830.04634972001!2d-77.10138193904672!3d-12.11632981622469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c836161c3993%3A0x3fb29c4f44ba0172!2sChinga+tu+Taco!5e0!3m2!1ses!2spe!4v1514738480315" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://www.',
      indications: 'https://www.google.com.pe/maps/dir//Chinga+tu+Taco,+Av+Mariscal+La+Mar+1300,+Miraflores+15074/@-12.1163298,-77.1013819,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c836161c3993:0x3fb29c4f44ba0172!2m2!1d-77.0492649!2d-12.109755',
      address: 'Av Mariscal La Mar 1300, Miraflores 15074',
      phone: '(01) 4410185',
      reservations: 'http://www.'},
    {url: 'c.noterajes.mexico3.png',
      name: 'Taqueria no te Rajes',
      map: '<iframe  class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124830.21157521865!2d-77.1013821466635!3d-12.11597655486896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c80337dfcb07%3A0xdd3b73f412ecf315!2sTaqueria+No+Te+Rajes!5e0!3m2!1ses!2spe!4v1514738600891" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'https://www.facebook.com/lostacosnoterajes',
      indications: 'https://www.google.com.pe/maps/dir//Taqueria+No+Te+Rajes,+18,+Av.+Alfredo+Benavides+1083,+Miraflores+15047/@-12.1159766,-77.1013821,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c80337dfcb07:0xdd3b73f412ecf315!2m2!1d-77.0213082!2d-12.1256077',
      address: '18, Av. Alfredo Benavides 1083, Miraflores 15047',
      phone: '959 511 813',
      reservations: 'https://www.facebook.com/lostacosnoterajes'},
    {url: 'c.tacoelnaco.mexico4.png',
      name: 'Taco el Naco',
      map: '<iframe class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124830.3767959543!2d-77.10138235428056!3d-12.115623293550268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7f54d178e35%3A0xd4317ef0221ca084!2sTaco+Naco!5e0!3m2!1ses!2spe!4v1514738731496" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://www.',
      indications: 'https://www.google.com.pe/maps/dir//Taco+Naco,+Av.+Alejandro+Velasco+Astete+2024,+Santiago+de+Surco+15039/@-12.1156233,-77.1013824,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c7f54d178e35:0xd4317ef0221ca084!2m2!1d-76.987574!2d-12.1273009',
      address: 'Av. Alejandro Velasco Astete 2024, Santiago de Surco 15039',
      phone: '(01) 2730425',
      reservations: 'http://www.'},
  ],
  'comida colombiana': [
    {url: 'd.cafe.colombia1.png',
      name: 'Cafe colombia',
      map: '<iframe class="img-responsive"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124830.54201192761!2d-77.10138256189795!3d-12.115270032268656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81bfbbbddd9%3A0x7cbaf89fd65677c4!2sCaf%C3%A9+Colombia!5e0!3m2!1ses!2spe!4v1514738876808" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://www.',
      indications: 'https://www.google.com.pe/maps/dir//Caf%C3%A9+Colombia,+Boulevard+El+Suche,+Cercado+de+Lima+15074/@-12.11527,-77.1013826,12z/data=!4m15!1m6!3m5!1s0x9105c81bfbbbddd9:0x7cbaf89fd65677c4!2sCaf%C3%A9+Colombia!8m2!3d-12.1240569!4d-77.0271816!4m7!1m0!1m5!1m1!1s0x9105c81bfbbbddd9:0x7cbaf89fd65677c4!2m2!1d-77.0271816!2d-12.1240569',
      address: 'Boulevard El Suche, Cercado de Lima 15074',
      phone: '(01) 2730415',
      reservations: 'http://www.'},
    {url: 'd.colochita.colombia2.png',
      name: 'La Colochita',
      map: '<iframe class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124830.70722313812!2d-77.10138276951557!3d-12.114916771024118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c843195d73a5%3A0x7eb4ac65547d4d4a!2sLa+Colochita!5e0!3m2!1ses!2spe!4v1514738976188" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://lacolochitaempanadas.webs.com/',
      indications: 'https://www.google.com.pe/maps/dir//La+Colochita,+Centro+Comercial+Conquistador+Plaza,+Av.+Camino+Real+485,+San+Isidro+15073/@-12.1149168,-77.1013828,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c843195d73a5:0x7eb4ac65547d4d4a!2m2!1d-77.036588!2d-12.098637',
      address: 'Centro Comercial Conquistador Plaza, Av. Camino Real 485, San Isidro 15073',
      phone: '990 438 671',
      reservations: 'http://lacolochitaempanadas.webs.com/'},
    {url: 'd.esquinita.colombia3.png',
      name: 'La Esquinita colombiana',
      map: '<iframe class="img-responsive"   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124830.87242958587!2d-77.10138297713343!3d-12.114563509816682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c63100bff05b%3A0x8b8151f2ef011fae!2sLa+Esquinita+Colombiana!5e0!3m2!1ses!2spe!4v1514739069923" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'https://web.facebook.com/LaEsquinitaColombianaEnLima/',
      indications: 'https://www.google.com.pe/maps/dir//La+Esquinita+Colombiana,+Avenida+Agust%C3%ADn+de+la+Rosa+Toro+490,+San+Luis+15021/@-12.1145635,-77.101383,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c63100bff05b:0x8b8151f2ef011fae!2m2!1d-76.9961337!2d-12.0752857',
      address: 'Avenida Agustín de la Rosa Toro 490, San Luis 15021',
      phone: '(01) 3238350',
      reservations: 'https://web.facebook.com/LaEsquinitaColombianaEnLima/'},
    {url: 'd.terrazacurrambera.colombia4.png',
      name: 'La Terraza Currambera',
      map: '<iframe class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.96395962308!2d-76.95901668573276!3d-12.046000745164775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c685b6a041db%3A0xcb0777960ee93bec!2sLa+Terraza+Currambera!5e0!3m2!1ses!2spe!4v1514739190885" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://laterrazacurrambera.negocio.site/',
      indications: 'https://www.google.com.pe/maps/dir//La+Terraza+Currambera,+Calle+Las+Azaleas+Mz+Q+Lt+12+Urb.+Sol+de+Santa+Anita,+Lima+LIMA+43/@-12.0460007,-76.9590167,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c685b6a041db:0xcb0777960ee93bec!2m2!1d-76.956828!2d-12.046006',
      address: 'Calle Las Azaleas Mz Q Lt 12 Urb. Sol de Santa Anita, Lima LIMA 43',
      phone: '994 112 950',
      reservations: 'http://laterrazacurrambera.negocio.site/'},
  ],
  'comida japonesa': [
    {url: 'e.edosushi.japon1.png',
      name: 'Edo sushi Bar',
      map: '<iframe class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124862.93129090632!2d-77.0268691097527!3d-12.045818863218106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c822d93982fb%3A0x379c1b9b24b17350!2sEdo+Sushi+Bar+Miraflores!5e0!3m2!1ses!2spe!4v1514739312101" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'https://edosushibar.com/',
      indications: 'https://www.google.com.pe/maps/dir//Edo+Sushi+Bar+Miraflores,+Calle+Berlin+601,+Miraflores+15074/@-12.0458189,-77.0268691,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c822d93982fb:0x379c1b9b24b17350!2m2!1d-77.0359006!2d-12.120292',
      address: 'Calle Berlin 601, Miraflores 15074',
      phone: '(01) 2432448',
      reservations: 'https://edosushibar.com/'},
    {url: 'e.fuji.japon2.png',
      name: 'Fuji',
      map: '<iframe class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.075445913123!2d-77.02962378573183!3d-12.106987546318729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c86ca62545a1%3A0x600c0a50e485f12a!2sComida+Japonesa+Fuji!5e0!3m2!1ses!2spe!4v1514739456530" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://www.restaurantfujiperu.com/',
      indications: 'https://www.google.com.pe/maps/dir//Comida+Japonesa+Fuji,+Av.+Paseo+de+la+Rep%C3%BAblica+4084,+Miraflores+Lima+18/@-12.1069875,-77.0296238,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c86ca62545a1:0x600c0a50e485f12a!2m2!1d-77.0274351!2d-12.1069928',
      address: 'Av. Paseo de la República 4084, Miraflores Lima 18',
      phone: '(01) 4408531',
      reservations: 'http://www.restaurantfujiperu.com/'},
    {url: 'e.hanzo.japon3.png',
      name: 'Hanzo',
      map: '<iframe class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.149534431628!2d-77.03906868573189!3d-12.101913746222495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c843d003766b%3A0x6769412f2439b9f4!2sHANZO+Restaurante!5e0!3m2!1ses!2spe!4v1514739561913" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://hanzo.com.pe/',
      indications: 'https://www.google.com.pe/maps/dir//HANZO+Restaurante,+Av.+Los+Conquistadores+598,+San+Isidro+15073/@-12.1019137,-77.0390687,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c843d003766b:0x6769412f2439b9f4!2m2!1d-77.03688!2d-12.101919',
      address: 'Av. Los Conquistadores 598, San Isidro 15073',
      phone: '(01) 4226367',
      reservations: 'http://hanzo.com.pe/'},
    {url: 'e.naruto.japon4.png',
      name: 'Naruto Japanese Food',
      map: '<iframe class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.187781613996!2d-77.00436138573193!3d-12.099293646172859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7dba3c3ce49%3A0x40f1665c6c1256b3!2sNaruto+Japanese+Food!5e0!3m2!1ses!2spe!4v1514739653964" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'https://www.facebook.com/NarutoJapaneseFood/info',
      indications: 'https://www.google.com.pe/maps/dir//Naruto+Japanese+Food,+Av.+Aviaci%C3%B3n+2982,+San+Borja+15036/@-12.0992936,-77.0043614,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c7dba3c3ce49:0x40f1665c6c1256b3!2m2!1d-77.0021727!2d-12.0992989',
      address: 'Av. Aviación 2982, San Borja 15036',
      phone: '(01) 5935689',
      reservations: 'https://www.facebook.com/NarutoJapaneseFood/info'},
  ],
  'comida arabe': [
    {url: 'f.azhar.arabe1.png',
      name: 'Azhar',
      map: '<iframe class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.013085527474!2d-77.03923798573176!3d-12.111256546399792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c83ee52e0be7%3A0xe9aeca41dd0d992b!2sAzahar!5e0!3m2!1ses!2spe!4v1514739750276" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://www.com.pe/',
      indications: 'https://www.google.com.pe/maps/dir//Azahar,+Avenida+Comandante+Espinar+839,+Miraflores+15074/@-12.1112565,-77.039238,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c83ee52e0be7:0xe9aeca41dd0d992b!2m2!1d-77.0370493!2d-12.1112618',
      address: 'Avenida Comandante Espinar 839, Miraflores 15074',
      phone: '(01) 4443896',
      reservations: 'http://www.com.pe/'},
    {url: 'f.guru.arabe2.png',
      name: 'Guru Indian y Pakistan Cuisine',
      map: '<iframe class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.766218913368!2d-76.99182668573154!3d-12.128141746720432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b80829f2519b%3A0xfd0e775bc9f51b5!2sGuru+Indian%26Pakistani+Cuisine!5e0!3m2!1ses!2spe!4v1514739839045" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://www.guruperu.com//web/secciones/index.php',
      indications: 'https://www.google.com.pe/maps/dir//Guru+Indian%26Pakistani+Cuisine,+Av.+Alfredo+Benavides+4518,+Santiago+de+Surco+15039/@-12.1281417,-76.9918267,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105b80829f2519b:0xfd0e775bc9f51b5!2m2!1d-76.989638!2d-12.128147',
      address: 'Av. Alfredo Benavides 4518, Santiago de Surco 15039',
      phone: '(01) 2403710',
      reservations: 'http://guruperu.com//web/secciones/reservas.php'},
    {url: 'f.shawerma.arabe3.png',
      name: 'Shawerma El Egipcio',
      map: '<iframe class="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.372093230625!2d-77.04389088573214!3d-12.08665964593344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c85862c99101%3A0x69d99ceb3f73a507!2sShawerma+El+Egipcio!5e0!3m2!1ses!2spe!4v1514739964576" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://www.com.pe/',
      indications: 'https://www.google.com.pe/maps/dir//Shawerma+El+Egipcio,+Julio+Cesar+Tello+872,+Lince+Lima+14/@-12.0866596,-77.0438909,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c85862c99101:0x69d99ceb3f73a507!2m2!1d-77.0417022!2d-12.0866649',
      address: 'Julio Cesar Tello 872, Lince Lima 14',
      phone: '(01) 2404684',
      reservations: 'http://www.com.pe/'},
    {url: 'f.tierrasanta.arabe4.png',
      name: 'Tierra santa',
      map: '<iframe class="img-responsive"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62421.97480915139!2d-77.07672193589366!3d-12.086568270629506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81967e382a1%3A0xa060cc54f835f891!2sTierra+Santa!5e0!3m2!1ses!2spe!4v1514740067776" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      website: 'http://www.restauranttierrasanta.com/',
      indications: 'https://www.google.com.pe/maps/dir//Tierra+Santa,+Calle+Schell+354,+Miraflores+Lima+18/@-12.0865683,-77.0767219,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c81967e382a1:0xa060cc54f835f891!2m2!1d-77.0282971!2d-12.1232389',
      address: 'Calle Schell 354, Miraflores Lima 18',
      phone: '(01) 2430970',
      reservations: 'http://www.restauranttierrasanta.com/'},
  ]
};
