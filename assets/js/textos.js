var textos = new Array()
/* Comando para Ancoras <a id="1"></a> */

var baseurl = '/';

textos[0] = [
	"Livro Um - Capítulo 01",
	baseurl + "livro-um/livro-um-capitulo-um#1",
	"Quem verdadeiramente o queira, pode conhecer-me. Só faz falta o querer para começar. Estou em geral em todas as partes e em nenhuma em particular. A quem me chama, vou."
];
textos[1] = [
	"Livro Um - Capítulo 01",
	 baseurl + "livro-um/livro-um-capitulo-um#2",
	"... todos vocês creem que se trata unicamente de um preceito ético impossível de levar à prática. Seguramente o leste ou ouviste alguma vez: “Não resistais ao mal."
];
textos[2] = [
	"Livro Um - Capítulo 01",
	 baseurl + "livro-um/livro-um-capitulo-um#3",
	"Na memória está o conhecimento ou a verdade. Unir-se de coração à verdade é o transcendental. [...] Deves procurar entender as coisas que te digo e compreender-me"
];

textos[3] = [
	"Livro Um - Capítulo 03",
	 baseurl + "livro-um/livro-um-capitulo-tres#1",
	"O mesmo que o bem e a virtude, o pecado e o mal só podem dar-se na vigília. Quem dorme, dorme; para o adormecido não há pecado, como não há bem e nem virtude. Há somente sonho."
];
textos[4] = [
	"Livro Um - Capítulo 03",
	 baseurl + "livro-um/livro-um-capitulo-tres#2",
	"Em nossos tempos se tem complicado muito o sentido da oração. Eu opino que, quando alguém sabe o que quer e luta por alcançá-lo, ainda que não o formule em palavras, está em permanente oração."
];

textos[5] = [
	"Livro um - Capítulo 04",
	baseurl + "livro-um/livro-um-capitulo-quatro#1",
	"As pessoas creem que os hábitos se deixam, quando na realidade só se podem trocá-los por outros. A sabedoria do homem se prova justamente em quais hábitos troca e quais adota no lugar dos que crê que deixou."
];

textos[6] = [
	"Livro Um - Capítulo 05",
	baseurl + "livro-um/livro-um-capitulo-cinco#1",
	"O único que verdadeiramente importa é ser. Quando o homem é, o demais o tem por acréscimo."
];
textos[7] = [
	"Livro um - Capítulo 05",
	baseurl + "livro-um/livro-um-capitulo-cinco#2",
	"Religião significa “re-ligar” e não há nada que se religar porque nada há no Universo que esteja desligado de algo."
];
textos[8] = [
	"Livro Um - Capítulo 05",
	baseurl + "livro-um/livro-um-capitulo-cinco#3",
	"Os sofrimentos lhes chegam como lhes chegam os prazeres. Sofrer deliberadamente pressupõe certo grau de vontade. De vontade própria."
];

textos[9] = [
	"Livro Um - Capítulo 06",
	 baseurl + "livro-um/livro-um-capitulo-seis#1",
	"O despertar ou a vigília de que falo é difícil, mas não impossível. É um contínuo esforço, um permanente andar às cegas durante muito tempo até que logramos compreender nossas falácias."
];
/**
"53","http://ovoodaserpenteemplumada.com/livrodois01/#reflexao2","Livro Dois - Capítulo I - texto 2","Já transcorreu um tempo desde esse amanhecer de primavera quando caí desnudo ante ela, livre da infernal roupagem que são os sete mantos de toda a ilusão. E ao recordar seu beijo, meu coração palpita ansioso de consumir-se nela, e tudo em mim arde, transformando meu ser. 
"
"54","http://ovoodaserpenteemplumada.com/livrodois01/#reflexao3","Livro Dois - Capítulo I - texto 3","Nada me disse com palavras e não podia querer dizer-me nada assim, porque ela é como uma só palavra que é todas as palavras; e em seu olhar, que é a plenitude da vida que desperta a alma, há a luz que nos mostra a entrada da Terra do Mayab... 
"
"55","http://ovoodaserpenteemplumada.com/livrodois01/#reflexao4","Livro Dois - Capítulo I - texto 4","Aproximei-me dela, a Sagrada Princesa Sac-Nicté, Branca Flor do Mayab, em um amanhecer de primavera, em uma das tantas voltas que a Terra também se aproxima do Sol para trocar beijos com ele, dar-lhe sua seiva e receber sua semente... 
"
"56","http://ovoodaserpenteemplumada.com/livrodois01/#reflexao5","Livro Dois - Capítulo I - texto 5","Então ela, a mais formosa entre todas as formosas, a Sagrada Princesa Sac-Nicté, Branca Flor do Mayab, mostrou seus lábios para que os beijassem, e seu sorriso amante somente me incendiou quando morreu a última gota de temor e de tristeza em meu coração de barro. 
"
"57","http://ovoodaserpenteemplumada.com/livrodois01/#reflexao6","Livro Dois - Capítulo I - texto 6","Sabe também que a partir de então viverá unido ao Mayab, sem poder ignorar nem esquecer seu entendimento e que passarão os mundos, os homens, as estrelas, os sóis, mas jamais passará a palavra Mayab, que é a palavra DELE. 
"
"58","http://ovoodaserpenteemplumada.com/livrodois01/#reflexao7","Livro Dois - Capítulo I - texto 7","E assim também se cumprirá em vós a santa profecia do Mayab de Jesus e virá o dia que sabereis que “não sois vós que falais, senão o Espírito de vosso Pai que fala em vós”. 
"
"64","http://ovoodaserpenteemplumada.com/livro-um05#reflexao3","livro um - Capítulo V - texto 3","Sofrer deliberadamente pressupõe certo grau de vontade. De vontade 
própria. Todos sabemos que o ódio é mal e que o amor é bom. Sabemos que devemos amar a nossos inimigos. Sabemos estas coisas de memória, mas não
podemos aplicá-las, ...
"
"65","http://ovoodaserpenteemplumada.com/livro-um06#reflexao1","livro um - Capítulo VI - texto 1","
"
"66","http://ovoodaserpenteemplumada.com/livro-um06#reflexao2","livro um - Capítulo VI - texto 2","Em primeiro lugar — disse ele. — É preciso que insista sobre um fato. 
Para ser discípulo de alguém como Jesus Cristo é preciso haver visto algo, haver compreendido algo; é necessário conhecer algo 
verdadeiramente real.
"
"67","http://ovoodaserpenteemplumada.com/livro-um06#reflexao3","livro um - Capítulo VI - texto 3","O amor é a chave de tudo, porque é a força que conserva e mantém tudo. A
fórmula “Amar a Deus sobre todas as Coisas e ao próximo como a si 
mesmo” requer uma consideração muito profunda. Ninguém pode amar ao 
próximo mais do que a si mesmo, mas amar a si mesmo requer certos tipos 
de impressões um pouco difíceis de explicar.
"
"68","http://ovoodaserpenteemplumada.com/livro-um07#reflexao1","livro um - Capítulo VII - texto 1","Ainda dormes. Se compreendesses que o homem não pode ter uma continuidade em seus propósitos, rapidamente compreenderias que a intenção não basta. Se o homem pudesse manter uma continuidade em seu pensamento, sentimento e ação, suas boas intenções dariam frutos generosos.
"
"69","http://ovoodaserpenteemplumada.com/livro-um08#reflexao1","livro um - Capítulo VIII - texto 1","A mais de três mil metros de altura, tendo um firmamento estrelado por 
panorama, o homem dos Andes tem, forçosamente, que sentir em termos 
grandiosos.
"
"70","http://ovoodaserpenteemplumada.com/livro-um09#reflexao1","livro um - Capítulo IX - texto 1","— Não quero dizer-te de forma mais clara. A verdade é sempre amarga para o adormecido, porque lhe tira de sua modorra. 
— Faz anos que vens me dizendo o mesmo e ainda não entendo. 
— Porque ainda dormes.
"
"71","http://ovoodaserpenteemplumada.com/livro-um10#reflexao1","livro um - Capítulo X - texto 1","Mas não te desesperes. Algum dia tu descobrirás o enorme segredo da 
confissão e seu valor e então saberás que a Serpente Emplumada pode 
voar.
"
"72","http://ovoodaserpenteemplumada.com/livro-um13#reflexao1","livro um - Capítulo XIII - texto 1","Vamos ver se podes tirar 
proveito desta lição. É possível que ainda devas sofrer, como resultado 
de tudo quanto fizeste. Mas não te desesperes. Procura prestar atenção 
naquele juiz interno de que te falei 
"
"73","http://ovoodaserpenteemplumada.com/livro-um15#reflexao1","livro um - Capítulo XV - texto 1","<em>O misterioso impulso que fixa tua atenção nestes manuscritos, não é 
senão o eco do grito que tem despertado a Essência Imortal do teu 
próprio sangue. E junto ao evocares as Forças Gloriosas da Vida, também 
tens evocado as Sinistras Forças da Morte.</em>
"
"74","http://ovoodaserpenteemplumada.com/livro-um15#reflexao2","livro um - Capítulo XV - texto 2","<em>Ao final, farás da Solidão e do Silêncio teus mais estimados 
companheiros; sumindo-te com eles no mais profundo de si mesmo, irás 
vislumbrando gradualmente todo o horror do Sonho que é a humana 
escravidão. E, pelo mesmo, aumentarás teu poderio para reclamares tua 
liberdade.</em>
"
"75","http://ovoodaserpenteemplumada.com/livro-um15#reflexao3","livro um - Capítulo XV - texto 3","<em>Cada elo na Cadeia dos Imortais aporta um grão a mais para aliviar a
carga de quem vem atrás, porém cada alma que se aventura nesta singular
empresa é um ensaio original da Vida para também fazer deste planeta 
Terra um Mundo de Divina Vigília.</em>
"
"76","http://ovoodaserpenteemplumada.com/livro-um15#reflexao4","livro um - Capítulo XV - texto 4","<em>Se em teu coração não arde uma inquietude que te abrase até a 
consumação de teu corpo, não poderás invocar nem a Deus nem ao Espírito 
Santo. E não saberás pedir e por isso tua hora ainda não tem chegado.</em>
"
"77","http://ovoodaserpenteemplumada.com/livrotres01#reflexao1","livro três - Capítulo I - texto 1","E pensava neste Espírito que é a chama que pela luz ilumina o santo 
beijo da Princesa Sac-Nicté, e seu coração dizia, quando pensava nela, 
porque ele também queria ser ânfora viva para servir a ELA: “Prova-me 
que teus lábios não foram feitos para serem beijados, e eu te provarei 
que as trevas são a luz.” 
"
"78","http://ovoodaserpenteemplumada.com/livrotres03#reflexao1","Livro três - Capítulo III - texto 1","“Tu és Mestre de Israel e não sabes estas coisas? Em verdade te digo, 
Nicodemos, falo-te daquilo que eu sei e que eu sou e dou testemunho do 
que vi; mas os homens de tua geração não querem receber meu testemunho. E
se te digo coisas da terra e não as podes <a href=""/livrotres03#nota1_anc"" title=""N.T. &quot;llevar&quot;"">crer<span class=""sdfootnoteanc""><sup>1</sup></span></a>, como poderás crer nas coisas que são do céu?
"
"79","http://ovoodaserpenteemplumada.com/livrotres04#reflexao1","Livro três - Capítulo IV - texto 1","“Só quem crê haver perdido o fio que corre através dos 
tempos tem o verdadeiro fio em suas mãos e quando encontre sua alma, não
a perderá.”
"
"80","http://ovoodaserpenteemplumada.com/livrotres04#reflexao2","Livro três - Capítulo IV - texto 2","Servia-lhe como um discípulo digno de Israel deve servir
ao seu Rabi e aguardava a minha hora de servir ao ETERNO, e em meu 
coração ardia o amor pela Verdade.
"
"81","http://ovoodaserpenteemplumada.com/livrotres05#reflexao1","Livro três - Capítulo V - texto 1","“Então, Judas, segue-me. Eu sou o caminho, a verdade e a
vida. E partirás o pão que eu te dou com teu Rabi Nicodemos, pois quem 
está em mim, em meu Pai está e o amor de meu Pai habita nele, porque meu
Pai e eu somos uma única coisa. Vens comigo, Judas?” 
"
"82","http://ovoodaserpenteemplumada.com/livrotres06#reflexao1","Livro três - Capítulo VI - texto 1","“Ao orar, não perdeis o fio secreto de vosso mais íntimo pensamento. E 
não vos angustieis por vossas necessidades, porque o Pai que está nos 
céus sabe o que haveremos de precisar, antes mesmo de pedirmos. Pois ELE
vos deu também vossas necessidades.” 
"
"83","http://ovoodaserpenteemplumada.com/livrotres08#reflexao1","Livro três - Capítulo VIII - texto 1","“Olhai esta geração e nela vede como se escravizaram à sua própria 
cegueira. Amam suas dores e amam seus males. Dizem-me: 'Dá-me, dá-me, 
dá-me', sem sequer atrever-se a suspeitar que, aquilo que me pedem, 
levam-no em si mesmos e por direito próprio. Mas só sabem pedir, não 
sabem receber. E são avaros, no entanto nenhum deles é culpado da sua 
sorte.
"
"84","http://ovoodaserpenteemplumada.com/livrotres09#reflexao1","Livro três - Capítulo IX - texto 1","“Não temas, Judas,” disse-me. “Tu também me acompanharás e ajudarás no caminho da regeneração para que outros
também sejam salvos. Eles,” disse estendendo sua mão para os onze que 
dormiam, “encontraram sua alma e há paz em seus corações. Tu, ao 
contrário, haverás de perder a tua antes de encontrá-la.”
"
"85","http://ovoodaserpenteemplumada.com/livrotres09#reflexao2","Livro três - Capítulo IX - texto 2","“Rabi, Rabi de meu coração. Eis que vejo chegar a noite e
como haverei de perder-me nas trevas para que o homem seja salvo. 
Afasta de mim este cálice se assim é tua vontade e a de nosso Pai que 
está nos céus e me ajuda a suportar a agonia que me espera.” 
"
"86","http://ovoodaserpenteemplumada.com/livrotres09#reflexao3","Livro três - Capítulo IX - texto 3","Quisera eu agora iluminar em teu coração a verdade dos fatos, pois não 
foi minha vontade senão a do Pai e de meu Rabi a que se fez naquela 
fatídica noite. E foi por isso também que nos dias da Páscoa se urdiu a 
trama de tal modo que a luz de meu zelo minguou e só ficou brilhando o 
fogo. Mas nem tudo foi manifesto e ainda não o é completamente.
"
"87","http://ovoodaserpenteemplumada.com/livrotres10#reflexao1","Livro três - Capítulo X - texto 1","“Judas, contempla o mundo,” disse-me meu Rabi, “pois é a vida de Deus e 
nela não há nada morto, nada pode morrer. Tudo quanto é vida, é Deus, e 
toda vida descende para logo ascender. Deus, o Pai que está nos céus, 
leva tudo em si mesmo, mas não existe somente para o homem senão que 
está ‘em’ e é tudo quanto ‘é’. Mas somente ao homem lhe é dado desfrutar
da compreensão de sua realidade.
"
**/
