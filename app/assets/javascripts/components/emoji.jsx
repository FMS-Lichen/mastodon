import emojione from 'emojione';

const json = {
  'aatrox': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Aatrox.png',
  'ahri': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Ahri.png',
  'akali': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Akali.png',
  'alistar': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Alistar.png',
  'amumu': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Amumu.png',
  'anivia': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Anivia.png',
  'annie': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Annie.png',
  'ashe': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Ashe.png',
  'aurelion_sol': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/AurelionSol.png',
  'azir': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Azir.png',
  'bard': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Bard.png',
  'blitzcrank': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Blitzcrank.png',
  'brand': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Brand.png',
  'braum': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Braum.png',
  'caitlyn': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Caitlyn.png',
  'camille': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Camille.png',
  'cassiopeia': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Cassiopeia.png',
  'chogath': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Chogath.png',
  'corki': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Corki.png',
  'darius': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Darius.png',
  'diana': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Diana.png',
  'dr_mundo': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/DrMundo.png',
  'draven': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Draven.png',
  'ekko': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Ekko.png',
  'elise': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Elise.png',
  'evelynn': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Evelynn.png',
  'ezreal': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Ezreal.png',
  'fiddlesticks': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Fiddlesticks.png',
  'fiora': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Fiora.png',
  'fizz': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Fizz.png',
  'galio': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Galio.png',
  'gangplank': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Gangplank.png',
  'garen': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Garen.png',
  'gnar': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Gnar.png',
  'gragas': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Gragas.png',
  'graves': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Graves.png',
  'hecarim': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Hecarim.png',
  'heimerdinger': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Heimerdinger.png',
  'illaoi': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Illaoi.png',
  'irelia': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Irelia.png',
  'ivern': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Ivern.png',
  'janna': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Janna.png',
  'jarvan_iv': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/JarvanIV.png',
  'jax': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Jax.png',
  'jayce': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Jayce.png',
  'jhin': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Jhin.png',
  'jinx': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Jinx.png',
  'kaisa': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Kaisa.png',
  'kalista': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Kalista.png',
  'karma': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Karma.png',
  'karthus': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Karthus.png',
  'kassadin': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Kassadin.png',
  'katarina': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Katarina.png',
  'kayle': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Kayle.png',
  'kayn': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Kayn.png',
  'kennen': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Kennen.png',
  'khazix': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Khazix.png',
  'kindred': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Kindred.png',
  'kled': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Kled.png',
  'kog_maw': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/KogMaw.png',
  'leblanc': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Leblanc.png',
  'lee_sin': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/LeeSin.png',
  'leona': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Leona.png',
  'lissandra': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Lissandra.png',
  'lucian': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Lucian.png',
  'lulu': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Lulu.png',
  'lux': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Lux.png',
  'malphite': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Malphite.png',
  'malzahar': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Malzahar.png',
  'maokai': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Maokai.png',
  'master_yi': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/MasterYi.png',
  'miss_fortune': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/MissFortune.png',
  'monkey_king': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/MonkeyKing.png',
  'mordekaiser': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Mordekaiser.png',
  'morgana': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Morgana.png',
  'nami': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Nami.png',
  'nasus': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Nasus.png',
  'nautilus': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Nautilus.png',
  'nidalee': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Nidalee.png',
  'nocturne': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Nocturne.png',
  'nunu': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Nunu.png',
  'olaf': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Olaf.png',
  'orianna': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Orianna.png',
  'ornn': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Ornn.png',
  'pantheon': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Pantheon.png',
  'poppy': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Poppy.png',
  'pyke': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Pyke.png',
  'quinn': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Quinn.png',
  'rakan': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Rakan.png',
  'rammus': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Rammus.png',
  'rek_sai': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/RekSai.png',
  'renekton': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Renekton.png',
  'rengar': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Rengar.png',
  'riven': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Riven.png',
  'rumble': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Rumble.png',
  'ryze': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Ryze.png',
  'sejuani': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Sejuani.png',
  'shaco': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Shaco.png',
  'shen': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Shen.png',
  'shyvana': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Shyvana.png',
  'singed': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Singed.png',
  'sion': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Sion.png',
  'sivir': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Sivir.png',
  'skarner': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Skarner.png',
  'sona': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Sona.png',
  'soraka': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Soraka.png',
  'swain': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Swain.png',
  'syndra': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Syndra.png',
  'tahm_kench': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/TahmKench.png',
  'taliyah': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Taliyah.png',
  'talon': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Talon.png',
  'taric': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Taric.png',
  'teemo': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Teemo.png',
  'thresh': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Thresh.png',
  'tristana': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Tristana.png',
  'trundle': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Trundle.png',
  'tryndamere': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Tryndamere.png',
  'twisted_fate': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/TwistedFate.png',
  'twitch': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Twitch.png',
  'udyr': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Udyr.png',
  'urgot': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Urgot.png',
  'varus': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Varus.png',
  'vayne': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Vayne.png',
  'veigar': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Veigar.png',
  'velkoz': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Velkoz.png',
  'vi': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Vi.png',
  'viktor': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Viktor.png',
  'vladimir': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Vladimir.png',
  'volibear': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Volibear.png',
  'warwick': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Warwick.png',
  'wu_kong': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/MonkeyKing.png',
  'xayah': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Xayah.png',
  'xerath': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Xerath.png',
  'xin_zhao': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/XinZhao.png',
  'yasuo': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Yasuo.png',
  'yorick': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Yorick.png',
  'zac': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Zac.png',
  'zed': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Zed.png',
  'ziggs': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Ziggs.png',
  'zilean': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Zilean.png',
  'zoe': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Zoe.png',
  'zyra': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Zyra.png',

  'Aatrox': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Aatrox.png',
  'Ahri': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Ahri.png',
  'Akali': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Akali.png',
  'Alistar': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Alistar.png',
  'Amumu': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Amumu.png',
  'Anivia': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Anivia.png',
  'Annie': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Annie.png',
  'Ashe': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Ashe.png',
  'AurelionSol': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/AurelionSol.png',
  'Azir': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Azir.png',
  'Bard': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Bard.png',
  'Blitzcrank': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Blitzcrank.png',
  'Brand': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Brand.png',
  'Braum': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Braum.png',
  'Caitlyn': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Caitlyn.png',
  'Camille': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Camille.png',
  'Cassiopeia': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Cassiopeia.png',
  'Chogath': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Chogath.png',
  'Corki': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Corki.png',
  'Darius': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Darius.png',
  'Diana': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Diana.png',
  'DrMundo': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/DrMundo.png',
  'Draven': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Draven.png',
  'Ekko': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Ekko.png',
  'Elise': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Elise.png',
  'Evelynn': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Evelynn.png',
  'Ezreal': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Ezreal.png',
  'Fiddlesticks': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Fiddlesticks.png',
  'Fiora': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Fiora.png',
  'Fizz': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Fizz.png',
  'Galio': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Galio.png',
  'Gangplank': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Gangplank.png',
  'Garen': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Garen.png',
  'Gnar': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Gnar.png',
  'Gragas': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Gragas.png',
  'Graves': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Graves.png',
  'Hecarim': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Hecarim.png',
  'Heimerdinger': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Heimerdinger.png',
  'Illaoi': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Illaoi.png',
  'Irelia': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Irelia.png',
  'Ivern': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Ivern.png',
  'Janna': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Janna.png',
  'JarvanIV': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/JarvanIV.png',
  'Jax': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Jax.png',
  'Jayce': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Jayce.png',
  'Jhin': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Jhin.png',
  'Jinx': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Jinx.png',
  'Kaisa': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Kaisa.png',
  'Kalista': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Kalista.png',
  'Karma': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Karma.png',
  'Karthus': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Karthus.png',
  'Kassadin': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Kassadin.png',
  'Katarina': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Katarina.png',
  'Kayle': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Kayle.png',
  'Kayn': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Kayn.png',
  'Kennen': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Kennen.png',
  'Khazix': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Khazix.png',
  'Kindred': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Kindred.png',
  'Kled': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Kled.png',
  'KogMaw': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/KogMaw.png',
  'Leblanc': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Leblanc.png',
  'LeeSin': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/LeeSin.png',
  'Leona': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Leona.png',
  'Lissandra': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Lissandra.png',
  'Lucian': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Lucian.png',
  'Lulu': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Lulu.png',
  'Lux': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Lux.png',
  'Malphite': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Malphite.png',
  'Malzahar': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Malzahar.png',
  'Maokai': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Maokai.png',
  'MasterYi': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/MasterYi.png',
  'MissFortune': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/MissFortune.png',
  'MonkeyKing': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/MonkeyKing.png',
  'Mordekaiser': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Mordekaiser.png',
  'Morgana': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Morgana.png',
  'Nami': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Nami.png',
  'Nasus': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Nasus.png',
  'Nautilus': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Nautilus.png',
  'Nidalee': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Nidalee.png',
  'Nocturne': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Nocturne.png',
  'Nunu': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Nunu.png',
  'Olaf': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Olaf.png',
  'Orianna': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Orianna.png',
  'Ornn': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Ornn.png',
  'Pantheon': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Pantheon.png',
  'Poppy': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Poppy.png',
  'Pyke': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Pyke.png',
  'Quinn': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Quinn.png',
  'Rakan': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Rakan.png',
  'Rammus': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Rammus.png',
  'RekSai': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/RekSai.png',
  'Renekton': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Renekton.png',
  'Rengar': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Rengar.png',
  'Riven': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Riven.png',
  'Rumble': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Rumble.png',
  'Ryze': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Ryze.png',
  'Sejuani': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Sejuani.png',
  'Shaco': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Shaco.png',
  'Shen': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Shen.png',
  'Shyvana': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Shyvana.png',
  'Singed': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Singed.png',
  'Sion': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Sion.png',
  'Sivir': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Sivir.png',
  'Skarner': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Skarner.png',
  'Sona': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Sona.png',
  'Soraka': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Soraka.png',
  'Swain': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Swain.png',
  'Syndra': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Syndra.png',
  'TahmKench': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/TahmKench.png',
  'Taliyah': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Taliyah.png',
  'Talon': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Talon.png',
  'Taric': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Taric.png',
  'Teemo': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Teemo.png',
  'Thresh': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Thresh.png',
  'Tristana': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Tristana.png',
  'Trundle': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Trundle.png',
  'Tryndamere': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Tryndamere.png',
  'TwistedFate': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/TwistedFate.png',
  'Twitch': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Twitch.png',
  'Udyr': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Udyr.png',
  'Urgot': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Urgot.png',
  'Varus': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Varus.png',
  'Vayne': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Vayne.png',
  'Veigar': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Veigar.png',
  'Velkoz': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Velkoz.png',
  'Vi': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Vi.png',
  'Viktor': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Viktor.png',
  'Vladimir': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Vladimir.png',
  'Volibear': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Volibear.png',
  'Warwick': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Warwick.png',
  'WuKong': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/MonkeyKing.png',
  'Xayah': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Xayah.png',
  'Xerath': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Xerath.png',
  'XinZhao': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/XinZhao.png',
  'Yasuo': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Yasuo.png',
  'Yorick': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Yorick.png',
  'Zac': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Zac.png',
  'Zed': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Zed.png',
  'Ziggs': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Ziggs.png',
  'Zilean': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Zilean.png',
  'Zoe': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Zoe.png',
  'Zyra': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/champion/Zyra.png',

  'Barrier': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerBarrier.png',
  'Clarity': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerMana.png',
  'Cleanse': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerBoost.png',
  'Exhaust': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerExhaust.png',
  'Heal': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerHeal.png',
  'Ignite': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerDot.png',
  'Flash': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerFlash.png',
  'Ghost': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerHaste.png',
  'Mark': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerSnowball.png',
  'Smite': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerSmite.png',
  'Teleport': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerTeleport.png',

  'TearOfTheGoddess': '//ddragon.leagueoflegends.com/cdn/7.4.1/img/item/3070.png',

  // Japan Esports Icons
  // 'DFM': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3295.png',
  'PGM': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3296.png',
  'USG': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3297.png',
  '7H': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3298.png',
  'RJ': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3299.png',
  'V3': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3300.png',
  'BC': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3547.png',
  'SZ': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3516.png',
  'CGA': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3515.png',
  'BE': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/1196.png',

  // WCS2018 Icons
  'KT': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3744.png',
  'AF': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3740.png',
  'GEN': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3741.png',
  'RNG': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3762.png',
  'IG': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3759.png',
  'EDG': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3758.png',
  'FNC': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3733.png',
  'VIT': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3738.png',
  'G2': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3734.png',
  'TL': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3767.png',
  '100T': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3763.png',
  'C9': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3764.png',
  'FW': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3752.png',
  'MAD': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3757.png',
  'GRX': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3753.png',
  'PVB': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3775.png',
  'KBM': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3730.png',
  'GMB': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3746.png',
  'INF': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3751.png',
  'SUP': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3770.png',
  'DFM': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3747.png',
  'KLG': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3731.png',
  'DW': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3769.png',
  'ASC': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3739.png'
};

const toImage = str => originalToImage(shortnameToImage(unicodeToImage(str)));

const unicodeToImage = str => {
  const mappedUnicode = emojione.mapUnicodeToShort();

  return str.replace(emojione.regUnicode, unicodeChar => {
    if (typeof unicodeChar === 'undefined' || unicodeChar === '' || !(unicodeChar in emojione.jsEscapeMap)) {
      return unicodeChar;
    }

    const unicode  = emojione.jsEscapeMap[unicodeChar];
    const short    = mappedUnicode[unicode];
    const filename = emojione.emojioneList[short].fname;
    const alt      = emojione.convert(unicode.toUpperCase());

    return `<img draggable="false" class="emojione" alt="${alt}" src="/emoji/${filename}.svg" />`;
  });
};

const shortnameToImage = str => str.replace(emojione.regShortNames, shortname => {
  if (typeof shortname === 'undefined' || shortname === '' || !(shortname in emojione.emojioneList)) {
    return shortname;
  }

  const unicode = emojione.emojioneList[shortname].unicode[emojione.emojioneList[shortname].unicode.length - 1];
  const alt     = emojione.convert(unicode.toUpperCase());

  return `<img draggable="false" class="emojione" alt="${alt}" src="/emoji/${unicode}.svg" />`;
});

const originalToImage = str => str.replace(/:([a-zA-Z0-9_]+):/g, (emoji, emojiName) => {
  var jsonKeys = Object.keys(json);

  if (!jsonKeys.includes(emojiName)) {
    return emoji;
  }
  return `<img draggable="false" class="emojione" alt="${emoji}" src="${json[emojiName]}" />`;
});

export default function emojify(text) {
  return toImage(text);
};
