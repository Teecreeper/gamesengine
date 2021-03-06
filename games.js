/*
***+ ANLEITUNG +***

Hier werden neue Spiele eingetragen.
Jedes Spiel besteht aus folgenden Informationen:
name: Der Name des Spiels
engine: Eine der unten aufgeführten Eingines.
  Sollte die Engine nicht bei sein, füge sie einfach hinzu.
releaseDate: Wann kam das Spiel ursprünglich raus?
 variante 1: {d: 11, m: 4, y: 2017} für bekanntes Datum
 variante 2: {q: 4, y: 2017} für noch nicht genau bekanntes Datum
imgId: Der Name des dementsprechenden Bildes im 'img/' order der Seite
  heißt der Pfad 'img/zuzu-land.jpg' dann trage 'zuzu-land' ein.
  Das Bild muss ein jpg sein
 yt: Die id des YouTube Videos.
   Das ist ein normaler YouTube Link: https://www.youtube.com/watch?v=f8Nl1O-eDGk
   Die ID ist in dem fall f8Nl1O-eDGk
   Das ist ein anderer Link mit doofen Zusatzinfos: https://www.youtube.com/watch?v=f8Nl1O-eDGk&feature=youtu.be&t=1s
   Da musst du aufpassen nur die ID zu erwischen (Nach dem v= bis zum ersten &)
*/

// ENGINES
var UNREAL4 = 'Unreal Engine 4'
var UNREAL3 = 'Unreal Engine 3'
var UNITY = 'Unity'
var XNA = 'Microsoft XNA'
var GAME_MAKER1 = 'Game Maker Studio'
var GAME_MAKER2 = 'Game Maker Studio 2'
var GODOT = 'Godot'
var FROSTBITE = 'Frostbite'   // https://www.ea.com/frostbite/games tbc
var OWN_ENGINE = 'Own Engine'
var PHASERJS = 'Phaser.js'
var COCOS2D = 'Cocos2D'
var RED_ENGINE = 'REDengine 2/3/4'
var LWJGL = 'LWJGL'
var CONSTRUCT2 = 'Construct 2'
var CRYENGINE1 = 'CryEngine 1'
var CRYENGINE2 = 'CryEngine 2'
var CRYENGINE3 = 'CryEngine 3'
var CRYENGINEV = 'CryEngine V'
var CTF = 'Clickteam Fusion 2.5'
var RV4 = 'Real Virtuality 4'
var SOURCE = 'Source Engine'


GAMES = [
      {name: 'Portal', engine: SOURCE, releaseDate: {d: 9, m: 10, y: 2007}, imgId: 'portal', yt: 'TluRVBhmf8w'},
      {name: 'Dauntless', engine: UNREAL4, releaseDate: {q: 4, y: 2017}, imgId: 'dauntless', yt: 'xOMq_luhZoA'},
      {name: 'Nidhogg', engine: GAME_MAKER1, releaseDate: {d: 13, m: 1, y: 2014}, imgId: 'nidhogg', yt: 'TaOocHXMhlU'},
      {name: 'Yooka-Laylee', engine: UNITY, releaseDate: {d: 11, m: 4, y: 2017}, imgId: 'yooka-laylee', yt: 'R57JwzXartU'},
      {name: 'Stardew Valley', engine: XNA, releaseDate: {d: 26, m: 2, y: 2016}, imgId: 'stardew-valley', yt: 'ot7uXNQskhs'},
      {name: 'Undertale', engine: GAME_MAKER1, releaseDate: {d: 15, m: 9, y: 2015}, imgId: 'undertale', yt: '1Hojv0m3TqA'},
      {name: 'Life is Strange', engine: UNREAL3, releaseDate: {d: 30, m: 1, y: 2015}, imgId: 'life-is-strange', yt: 'YznXuKwJtMg'},
      {name: 'The Forest', engine: UNITY, releaseDate: {d: 30, m: 5, y: 2014}, imgId: 'the-forest', yt: '4qTtVMM3uqQ'},
      {name: 'Star Wars Battlefront', engine: FROSTBITE, releaseDate: {d: 17, m: 11, y: 2011}, imgId: 'battlefront', yt: 'ZwWLns7-xN8'},
      {name: 'Battlefield 3', engine: FROSTBITE, releaseDate: {d: 25, m: 10, y: 2011}, imgId: 'battlefield-3', yt: 'UIUJh2mA8vg'},
      {name: 'Battlefield 4', engine: FROSTBITE, releaseDate: {d: 29, m: 10, y: 2013}, imgId: 'battlefield-4', yt: 'sclTMEd7JN8'},
      {name: 'Battlefield 1', engine: FROSTBITE, releaseDate: {d: 21, m: 10, y: 2016}, imgId: 'battlefield-1', yt: 'c7nRTF2SowQ'},
      {name: 'Crysis 1', engine: CRYENGINE1, releaseDate: {d: 16, m: 11, y: 2007}, imgId: 'crysis-1', yt: '4YMdZnb2Zyo'},
      {name: 'Crysis 2', engine: CRYENGINE2, releaseDate: {d: 22, m: 3, y: 2011}, imgId: 'crysis-2', yt: 'Xa1NvpiwqQk'},
      {name: 'Crysis 3', engine: CRYENGINE3, releaseDate: {d: 19, m: 2, y: 2013}, imgId: 'crysis-3', yt: 'ax5qX6HyB-o'},
      {name: 'The Witcher 3', engine: RED_ENGINE, releaseDate: {d: 19, m: 5, y: 2015}, imgId: 'witcher3', yt: 'tDfa1Qp2SwA'},
      {name: 'Super Mario Run', engine: UNITY, releaseDate: {d: 15, m: 12, y: 2016}, imgId: 'mario-run', yt: 'wSL56aLy8BI'},
      {name: 'Minecraft', engine: LWJGL, releaseDate: {d: 17, m: 5, y: 2009}, imgId: 'minecraft', yt: 'MmB9b5njVbA'},
  	  {name: 'Super Ubie Island', engine: CONSTRUCT2, releaseDate: {d: 15, m: 1, y: 2016}, imgId: 'superubieisland', yt: 'd41yEc3CGoQ'},
	    {name: 'Far Cry', engine: CRYENGINE1, releaseDate: {d: 23, m: 3, y: 2004}, imgId: 'farcry', yt: '_rFi_FdtJ6k'},
      {name: 'The Escapist', engine: CTF, releaseDate: {d: 13, m: 2, y: 2015}, imgId: 'The-Escapists', yt: 'ixeHjuPKlUU'}, // https://community.clickteam.com/content/224-The-Escapists-Kickstarter-Launched
      {name: 'Arma 3', engine: RV4, releaseDate: {d: 12, m: 9, y: 2013}, imgId: 'arma3', yt: 'M1YBZUxMX8g'}, // https://arma3.com/features/engine
      {name: 'Argo', engine: RV4, releaseDate: {d: 22, m: 6, y: 2017}, imgId: 'argo', yt: '459VNYwtuS4'}, // Basiert auf Arma 3
      {name: 'Playerunknown\'s Battlegrounds', engine: UNREAL4, releaseDate: {d: 23, m: 3, y: 2017}, imgId: 'PUBG', yt: 'ODWCbu_cuqk'},
      {name: 'Avorion', engine: OWN_ENGINE, releaseDate: {d: 23, m: 1, y: 2017}, imgId: 'avorion', yt: 'PfhIAmnC9kY'}, // https://www.avorion.net/forum/index.php/topic,57.msg306.html?PHPSESSID=jatgosd1226p6nhufid2r5ieu7#msg306
      {name: 'Half-Life', engine: SOURCE, releaseDate: {d: 8, m: 11, y: 1998}, imgId: 'hl1', yt: '5Wavn29LMrs'},
      {name: 'Half-Life 2', engine: SOURCE, releaseDate: {d: 16, m: 11, y: 2004}, imgId: 'hl2', yt: 'S2CSjTa8Jrc'},
      {name: 'Snipperclips', engine: UNITY, releaseDate: {d: 3, m: 3, y: 2017}, imgId: 'snipperclips', yt: 'FAol5oItb2E'}, // https://en.wikipedia.org/wiki/Snipperclips
      {name: 'Firewatch', engine: UNITY, releaseDate: {d: 9, m: 2, y: 2016}, imgId: 'firewatch', yt: 'd02lhvvVSy8'}, // https://madewith.unity.com/en/games/firewatch
      {name: 'Blobcat', engine: UNITY, releaseDate: {d: 10, m: 3, y: 2017}, imgId: 'blobcat', yt: 'mszlI5CcpQo'}, // https://www.youtube.com/watch?v=LI0r2jh8UAo
	  {name: 'Guild Wars 2', engine: OWN_ENGINE, releaseDate: {d: 28, m: 08, y: 2012}, imgId: 'gw2', yt: 'rinOhAev_5k'}
]
