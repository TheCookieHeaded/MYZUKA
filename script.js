const vinyl = document.querySelector('#vinyl');
let songTitle = document.querySelector('.songName');
const back = document.querySelector('.back');
const frwd = document.querySelector('.forward');
const pauza = document.querySelector('.playPause');
const mute = document.querySelector('.mute');

let tracks = [
            //ГАГА
        //the fame
    { id: 'just_Dance', name: 'Just Dance', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Just_Dance.mp3' },
    { id: 'love_Game', name: 'LoveGame', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_LoveGame.mp3' },
    { id: 'papa_RAZZI', name: 'Paparazzi', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Paparazzi.mp3' },
    { id: 'poker_Face', name: 'Poker Face', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Poker_Face.mp3' },
    { id: 'iLike_itRough', name: 'I Like It Rough', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_I_Like_It_Rough.mp3' },
    { id: 'eh_Eh', name: 'Eh, Eh (Nothing Else I Can Say)', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Eh_Eh_Nothing_Else_I_Can_Say.mp3' },
    { id: 'BDR', name: 'Beautiful, Dirty, Rich', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Beautiful_Dirty_Rich.mp3' },
    { id: 'the_Fame', name: 'The Fame', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_The_Fame.mp3' },
    { id: 'money_Honey', name: 'Money Honey', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Money_Honey.mp3' },
    { id: 'star_Struck', name: 'Starstruck (ft. Space Cowboy, Flo Rida)', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_Flo_Rida_Space_Cowboy_-_Starstruck.mp3' },
    { id: 'bBb', name: 'Boys Boys Boys', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Boys_Boys_Boys.mp3' },
    { id: 'paper_Gangsta', name: 'Paper Gangsta', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Paper_Gangsta.mp3' },
    { id: 'vanity', name: 'Vanity', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Vanity.mp3' },
    { id: 'brown_Eyes', name: 'Brown Eyes', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Brown_Eyes.mp3' },
    { id: 'summer_Boy', name: 'Summerboy', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Summerboy.mp3' },
    { id: 'again_Again', name: 'Again Again', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Again_Again.mp3' },
    { id: 'disco_Heaven', name: 'Disco Heaven', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Disco_Heaven.mp3' },
    { id: 'retro_Dance_Freak', name: 'Retro, Dance, Freak', audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Retro_Dance_Freak.mp3' },
        //the fame monster
    { id: 'bad_romance', name: 'Bad Romance', audioPath: 'music/LadyGaga/LG2/Lady_Gaga_-_Bad_Romance.mp3' },
    { id: 'alejandro', name: 'Alejandro', audioPath: 'music/LadyGaga/LG2/Lady_Gaga_-_Alejandro.mp3' },
    { id: 'monster', name: 'Monster', audioPath: 'music/LadyGaga/LG2/Lady_Gaga_-_Monster.mp3' },
    { id: 'speechless', name: 'Speechless', audioPath: 'music/LadyGaga/LG2/Lady_Gaga_-_Speechless.mp3' },
    { id: 'dance_in_the_dark', name: 'Dance In The Dark', audioPath: 'music/LadyGaga/LG2/Lady_Gaga_-_Dance_In_The_Dark.mp3' },
    { id: 'telephone', name: 'Telephone (feat. Beyoncé)', audioPath: 'music/LadyGaga/LG2/Lady_Gaga_-_Telephone.mp3' },
    { id: 'so_happy_i_could_die', name: 'So Happy I Could Die', audioPath: 'music/LadyGaga/LG2/Lady_Gaga_-_So_Happy_I_Could_Die.mp3' },
    { id: 'teeth', name: 'Teeth', audioPath: 'music/LadyGaga/LG2/Lady_Gaga_-_Teeth.mp3' },
        //born this way
    { id: 'mtn', name: 'Marry The Night', audioPath: 'music/LadyGaga/LG3/Lady_Gaga_-_Marry_The_Night.mp3' },
    { id: 'btw', name: 'Born This Way', audioPath: 'music/LadyGaga/LG3/Lady_Gaga_-_.mp3' },
    { id: 'gh', name: 'Government Hooker', audioPath: 'music/LadyGaga/LG3/Lady_Gaga_-_Government_Hooker.mp3' },
    { id: 'jydas', name: 'Judas', audioPath: 'music/LadyGaga/LG3/Lady_Gaga_-_Judas.mp3' },
    { id: 'americano', name: 'Americano', audioPath: 'music/LadyGaga/LG3/Lady_Gaga_-_Americano.mp3' },
    { id: 'hair', name: 'Hair', audioPath: 'music/LadyGaga/LG3/Lady_Gaga_-_Hair.mp3' },
    { id: 'sch', name: 'Scheiße', audioPath: 'music/LadyGaga/LG3/Lady_Gaga_-_ScheiBe.mp3' },
    { id: 'bm', name: 'Bloody Mary', audioPath: 'music/LadyGaga/LG3/Lady_Gaga_-_Bloody_Mary.mp3' },
    { id: 'bjaf', name: 'Black Jesus † Amen Fashion', audioPath: 'music/LadyGaga/LG3/Lady_Gaga_-_Black_Jesus_Amen_Fashion.mp3' },
    { id: 'bk', name: 'Bad Kids', audioPath: 'music/LadyGaga/LG3/Lady_Gaga_-_Bad_Kids.mp3' },
    { id: 'fohl', name: 'Fashion Of His Love', audioPath: 'music/LadyGaga/LG3/Lady_Gaga_-_Fashion_Of_His_Love.mp3' },
    { id: 'hurtl', name: 'Highway Unicorn (Road To Love)', audioPath: 'music/LadyGaga/LG3/Lady_Gaga_-_Highway_Unicorn_Road_To_Love.mp3' },
    { id: 'hml', name: 'Heavy Metal Lover', audioPath: 'music/LadyGaga/LG3/Lady_Gaga_-_Heavy_Metal_Lover.mp3' },
    { id: 'ec', name: 'Electric Chapel', audioPath: 'music/LadyGaga/LG3/Lady_Gaga_-_Electric_Chapel.mp3' },
    { id: 'queen', name: 'The Queen', audioPath: 'music/LadyGaga/LG3/Lady_Gaga_-_The_Queen.mp3' },
    { id: 'unI', name: 'Yoü And I', audioPath: 'music/LadyGaga/LG3/Lady_Gaga_-_You_And_I.mp3' },
    { id: 'teog', name: 'The Edge Of Glory', audioPath: 'music/LadyGaga/LG3/Lady_Gaga_-_The_Edge_Of_Glory.mp3' },
        //artpop
    { id: 'aura', name: 'Aura', audioPath: 'music/LadyGaga/LG4/Lady_Gaga_-_Aura.mp3' },
    { id: 'venus', name: 'Venus', audioPath: 'music/LadyGaga/LG4/Lady_Gaga_-_Venus.mp3' },
    { id: 'guy', name: 'G.U.Y.', audioPath: 'music/LadyGaga/LG4/Lady_Gaga_-_GUY.mp3' },
    { id: 'xdreams', name: 'X Dreams', audioPath: 'music/LadyGaga/LG4/Lady_Gaga_-_X_Dreams.mp3' },
    { id: 'jnd', name: "Jewels n' ***** (feat. T.I., Too Short, Twista)", audioPath: 'music/LadyGaga/LG4/Lady_Gaga_-_Jewels_N_rugs.mp3' },
    { id: 'manicure', name: 'MANiCURE', audioPath: 'music/LadyGaga/LG4/Lady_Gaga_-_MANiCURE.mp3' },
    { id: 'dwuw', name: 'Do What U Want (feat. Christina Aguilera)', audioPath: 'music/LadyGaga/LG4/Lady_Gaga_Christina_Aguilera_-_Do_What_U_Want.mp3' },
    { id: 'artPop', name: 'ARTPOP', audioPath: 'music/LadyGaga/LG4/Lady_Gaga_-_ARTPOP.mp3' },
    { id: 'swine', name: 'Swine', audioPath: 'music/LadyGaga/LG4/Lady_Gaga_-_Swine.mp3' },
    { id: 'donatella', name: 'Donatella', audioPath: 'music/LadyGaga/LG4/Lady_Gaga_-_Donatella.mp3' },
    { id: 'fashionExclamationMark', name: 'Fashion!', audioPath: 'music/LadyGaga/LG4/Lady_Gaga_-_Fashion.mp3' },
    { id: 'mjh', name: 'Mary Jane Holland', audioPath: 'music/LadyGaga/LG4/Lady_Gaga_-_Mary_Jane_Holland.mp3' },
    { id: 'dope', name: 'Dope', audioPath: 'music/LadyGaga/LG4/Lady_Gaga_-_Dope.mp3' },
    { id: 'gypsy', name: 'Gypsy', audioPath: 'music/LadyGaga/LG4/Lady_Gaga_-_Gypsy.mp3' },
    { id: 'applause', name: 'Applause', audioPath: 'music/LadyGaga/LG4/Lady_Gaga_-_Applause.mp3' },
        //cheek to cheek
    { id: 'ag', name: 'Anything Goes', audioPath: 'music/LadyGaga/LG4,5/Anything_goes.mp3' },
    { id: 'ctc', name: 'Cheek To Cheek (feat. Irving Berlin)', audioPath: 'music/LadyGaga/LG4,5/Cheek_To-Cheek.mp3' },
    { id: 'dwtl', name: "Don't Wait Too Long", audioPath: 'music/LadyGaga/LG4,5/DWTL.mp3' },
    { id: 'icguabl', name: "I Can't Give You Anything But Love", audioPath: 'music/LadyGaga/LG4,5/ICGYABL.mp3' },
    { id: 'nb', name: 'Nature Boy', audioPath: 'music/LadyGaga/LG4,5/Nature_boy.mp3' },
    { id: 'gg', name: 'Goody Goody', audioPath: 'music/LadyGaga/LG4,5/Goody_Goody.mp3' },
    { id: 'etwsg', name: "Ev'ry Time We Say Goodbye", audioPath: 'music/LadyGaga/LG4,5/ETWSG.mp3' },
    { id: 'firefly', name: 'Firefly', audioPath: 'music/LadyGaga/LG4,5/Firefly.mp3' },
    { id: 'iwd', name: "I Won't Dance", audioPath: 'music/LadyGaga/LG4,5/I_Wont_Dance.mp3' },
    { id: 'tal', name: 'They All Laughed', audioPath: 'music/LadyGaga/LG4,5/They_All_Laughed.mp3' },
    { id: 'll', name: 'Lush Life', audioPath: 'music/LadyGaga/LG4,5/Lush_Life.mp3' },
    { id: 'sl', name: 'Sophisticated Lady', audioPath: 'music/LadyGaga/LG4,5/Sophisticated_Lady.mp3' },
    { id: 'lftmad', name: "Let's Face The Music And Dance", audioPath: 'music/LadyGaga/LG4,5/LFTMAD.mp3' },
    { id: 'bb', name: 'But Beautiful', audioPath: 'music/LadyGaga/LG4,5/But_Beautiful.mp3' },
    { id: 'idmat', name: "It Don't Mean A Thing (If It Ain't Got A Swing)", audioPath: 'music/LadyGaga/LG4,5/IDMAT(IIAGAS).mp3' },
        //joanne
    { id: 'diamondheart', name: 'Diamond Heart', audioPath: 'music/LadyGaga/LG5/Lady_Gaga_-_Diamond_Heart.mp3' },
    { id: 'ayo', name: 'A-YO', audioPath: 'music/LadyGaga/LG5/Lady_Gaga_-_A-YO.mp3' },
    { id: 'joanne', name: 'Joanne', audioPath: 'music/LadyGaga/LG5/Lady_Gaga_-_Joanne.mp3' },
    { id: 'johnwayne', name: 'John Wayne', audioPath: 'music/LadyGaga/LG5/Lady_Gaga_-_John_Wayne.mp3' },
    { id: 'dancinincircles', name: "Dancin' In Circles", audioPath: 'music/LadyGaga/LG5/Lady_Gaga_-_Dancin_In_Circles.mp3' },
    { id: 'perfectillusion', name: 'Perfect Illusion', audioPath: 'music/LadyGaga/LG5/Lady_Gaga_-_Perfect_Illusion.mp3' },
    { id: 'millionreasons', name: 'Million Reasons', audioPath: 'music/LadyGaga/LG5/Lady_Gaga_-_Million_Reasons.mp3' },
    { id: 'sinnersprayer', name: "Sinner's Prayer", audioPath: 'music/LadyGaga/LG5/Lady_Gaga_-_Sinners_Prayer.mp3' },
    { id: 'mama', name: 'Come To Mama', audioPath: 'music/LadyGaga/LG5/Lady_Gaga_-_Come_To_Mama.mp3' },
    { id: 'heygirl', name: 'Hey Girl (feat. Florence Welch)', audioPath: 'music/LadyGaga/LG5/Lady_Gaga_-_Hey_Girl.mp3' },
    { id: 'angeldown', name: 'Angel Down', audioPath: 'music/LadyGaga/LG5/Lady_Gaga_-_Angel_Down.mp3' },
    { id: 'grigio', name: 'Girgio Girls', audioPath: 'music/LadyGaga/LG5/Lady_Gaga_-_Grigio_Girls.mp3' },
    { id: 'anotherday', name: 'Just Another Day', audioPath: 'music/LadyGaga/LG5/Lady_Gaga_-_Just_Another_Day.mp3' },
    { id: 'worktape', name: 'Angel Down (Work Tape)', audioPath: 'music/LadyGaga/LG5/Lady_Gaga_-_Angel_Down_Work_Tape.mp3' },
        //chromatica
    { id: 'ch1', name: 'Chromatica I', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_-_Chromatica_I.mp3' },
    { id: 'alice', name: 'Alice', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_-_Alice.mp3' },
    { id: 'stupid-love', name: 'Stupid Love', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_-_Stupid_Love.mp3' },
    { id: 'rain-on-me', name: 'Rain On Me (feat. Ariana Grande)', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_Ariana_Grande_-_Rain_On_Me.mp3' },
    { id: 'free-woman', name: 'Free Woman', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_-_Free_Woman.mp3' },
    { id: 'fun-tonight', name: 'Fun Tonight', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_-_Fun_Tonight.mp3' },
    { id: 'ch2', name: 'Chromatica II', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_-_Chromatica_II.mp3' },
    { id: 'nine-one-one', name: '911', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_-_911.mp3' },
    { id: 'plastic-doll', name: 'Plastic Doll', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_-_Plastic_Doll.mp3' },
    { id: 'sour-candy', name: 'Sour Candy (feat. BLACKPINK)', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_BLACKPINK_-_Sour_Candy.mp3' },
    { id: 'enigma', name: 'Enigma', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_-_Enigma.mp3' },
    { id: 'replay', name: 'Replay', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_-_Replay.mp3' },
    { id: 'ch3', name: 'Chromatica III', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_-_Chromatica_III.mp3' },
    { id: 'sine', name: 'Sine From Above (feat. Elton John)', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_Elton_John_-_Sine_From_Above.mp3' },
    { id: 'doves', name: '1000 Doves', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_-_1000_Doves.mp3' },
    { id: 'babylon', name: 'Babylon', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_-_Babylon.mp3' },
    { id: 'luv-me-right', name: 'Love Me Right', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_-_Love_Me_Right.mp3' },
    { id: 'piano-demo', name: '1000 Doves (Piano Demo)', audioPath: 'music/LadyGaga/LG6/Lady_Gaga_-_1000_Doves_Piano_Demo.mp3' },
        //love for sale
    { id: 'de-lovely', name: "It's De-Lovely", audioPath: 'music/LadyGaga/LG6,5/Tony_Bennett_Lady_Gaga_-_Its_De-Lovely.mp3' },
    { id: 'night-and-day', name: 'Night And Day', audioPath: 'music/LadyGaga/LG6,5/Tony_Bennett_Lady_Gaga_-_Night_And_Day.mp3' },
    { id: 'love-4-sale', name: 'Love For Sale', audioPath: 'music/LadyGaga/LG6,5/Tony_Bennett_Lady_Gaga_-_Love_For_Sale.mp3' },
    { id: 'do-i-love-u', name: 'Do I Love You', audioPath: 'music/LadyGaga/LG6,5/Lady_Gaga_-_Do_I_Love_You.mp3' },
    { id: 'igyums', name: "I've Got You Under My Skin", audioPath: 'music/LadyGaga/LG6,5/Tony_Bennett_Lady_Gaga_-_Ive_Got_You_Under_My_Skin.mp3' },
    { id: 'concentrate-on-u', name: 'I Concentrate On You', audioPath: 'music/LadyGaga/LG6,5/Tony_Bennett_Lady_Gaga_-_I_Concentrate_On_You.mp3' },
    { id: 'igakooy', name: 'I Get A Kick Out Of You', audioPath: 'music/LadyGaga/LG6,5/Tony_Bennett_Lady_Gaga_-_I_Get_A_Kick_Out_Of_You.mp3' },
    { id: 'so-in-love', name: 'So In Love', audioPath: 'music/LadyGaga/LG6,5/Tony_Bennett_-_So_In_Love.mp3' },
    { id: 'lets-do-it', name: "Let's Do It", audioPath: 'music/LadyGaga/LG6,5/Lady_Gaga_-_Lets_Do_It.mp3' },
    { id: 'dream-dancing', name: 'Dream Dancing', audioPath: 'music/LadyGaga/LG6,5/Tony_Bennett_Lady_Gaga_-_Dream_Dancing.mp3' },
    { id: 'one-of-those-things', name: 'Just One Of Those Things', audioPath: 'music/LadyGaga/LG6,5/Tony_Bennett_-_Just_One_Of_Those_Things.mp3' },
    { id: 'youre-the-top', name: "You're The Top", audioPath: 'music/LadyGaga/LG6,5/Tony_Bennett_Lady_Gaga_-_Youre_The_Top.mp3' },
        //harlequin
    { id: 'good-morning', name: 'Good Morning', audioPath: 'music/LadyGaga/LG6,8/GoodMorning.mp3' },
    { id: 'get-happy', name: 'Get Happy (2024)', audioPath: 'music/LadyGaga/LG6,8/GetHappy.mp3' },
    { id: 'when-the-saints', name: 'Oh, When The Saints', audioPath: 'music/LadyGaga/LG6,8/OhWhenTheSaints.mp3' },
    { id: 'world-on-a-string', name: 'World On A String', audioPath: 'music/LadyGaga/LG6,8/WorldOnAString.mp3' },
    { id: 'imfcsmn', name: 'If My Friends Could See Me Now', audioPath: 'music/LadyGaga/LG6,8/IfMyFriendsCouldSeeMeNow.mp3' },
    { id: 'enterntainment', name: "That's Enterntainment", audioPath: 'music/LadyGaga/LG6,8/ThatsEntertainment.mp3' },
    { id: 'smile', name: 'Smile', audioPath: 'music/LadyGaga/LG6,8/LadyGaga-Smile.mp3' },
    { id: 'joker', name: 'The Joker', audioPath: 'music/LadyGaga/LG6,8/TheJoker.mp3' },
    { id: 'folie-a-deux', name: 'Folie à Deux', audioPath: 'music/LadyGaga/LG6,8/FolieADeux.mp3' },
    { id: 'gonna-build-mountain', name: 'Gonna Build A Mountain', audioPath: 'music/LadyGaga/LG6,8/GonnaBuildAMountain.mp3' },
    { id: 'close-to-you', name: 'Close To You', audioPath: 'music/LadyGaga/LG6,8/CloseToYou.mp3' },
    { id: 'happy-mistake', name: 'Happy Mistake', audioPath: 'music/LadyGaga/LG6,8/HappyMistake.mp3' },
    { id: 'that-life', name: "That's Life", audioPath: 'music/LadyGaga/LG6,8/ThatsLife.mp3' },
        //mayhem
    { id: 'disease', name: 'Disease', audioPath: 'music/LadyGaga/LG7/Lady_Gaga_-_Disease.mp3' },
    { id: 'abracadabra', name: 'Abracadabra', audioPath: 'music/LadyGaga/LG7/Lady_Gaga_-_Abracadabra.mp3' },
    { id: 'garden-of-eden', name: 'Garden Of Eden', audioPath: 'music/LadyGaga/LG7/Lady_Gaga_-_Garden_Of_Eden.mp3' },
    { id: 'perfect-celebrity', name: 'Perfect Celebrity', audioPath: 'music/LadyGaga/LG7/Lady_Gaga_-_Perfect_Celebrity.mp3' },
    { id: 'cant-stop-the-high', name: "Can't Stop The High", audioPath: 'music/LadyGaga/LG7/Lady_Gaga_-_Cant_Stop_the_High.mp3' },
    { id: 'vanish-into-you', name: 'Vanish Into You', audioPath: 'music/LadyGaga/LG7/Lady_Gaga_-_Vanish_Into_You.mp3' },
    { id: 'killah', name: 'Killah (feat. Gesaffelstein)', audioPath: 'music/LadyGaga/LG7/Lady_Gaga_Gesaffelstein_-_Killah.mp3' },
    { id: 'zombieboy', name: 'Zombieboy', audioPath: 'music/LadyGaga/LG7/Lady_Gaga_-_Zombieboy.mp3' },
    { id: 'dead-dance', name: 'The Dead Dance', audioPath: 'music/LadyGaga/LG7/Lady_Gaga_-_The_Dead_Dance.mp3' },
    { id: 'lovedrug', name: 'LoveDrug', audioPath: 'music/LadyGaga/LG7/Lady_Gaga_-_LoveDrug.mp3' },
    { id: 'how-bad-u-want-me', name: 'How Bad Do U Want Me', audioPath: 'music/LadyGaga/LG7/Lady_Gaga_-_How_Bad_Do_U_Want_Me.mp3' },
    { id: 'dont-call-tonight', name: "Don't Call Tonight", audioPath: 'music/LadyGaga/LG7/Lady_Gaga_-_Dont_Call_Tonight.mp3' },
    { id: 'kill-4-love', name: 'Kill For Love', audioPath: 'music/LadyGaga/LG7/Lady_Gaga_-_Kill_For_Love.mp3' },
    { id: 'shadow-of-man', name: 'Shadow Of A Man', audioPath: 'music/LadyGaga/LG7/Lady_Gaga_-_Shadow_Of_A_Man.mp3' },
    { id: 'beast', name: 'The Beast', audioPath: 'music/LadyGaga/LG7/Lady_Gaga_-_The_Beast.mp3' },
    { id: 'blade-of-grass', name: 'Blade Of Grass', audioPath: 'music/LadyGaga/LG7/Lady_Gaga_-_Blade_Of_Grass.mp3' },
    { id: 'dwas', name: 'Die With A Smile (feat. Bruno Mars)', audioPath: 'music/LadyGaga/LG7/Lady_Gaga_Bruno_Mars_-_Die_With_A_Smile.mp3' },
];

let preloaded = [];
tracks.forEach(function(track) {
  let audio = new Audio(track.src);
  audio.preload = 'auto';
  preloaded.push(audio);
});

let currentTrackIndex = -1;
let currentAudio = null;
let isPlaying = false;
let isMuted = false;

function setTitle() {
  if (currentTrackIndex >= 0 && currentTrackIndex < tracks.length) {
    songTitle.textContent = tracks[currentTrackIndex].name;
  } else {
    songTitle.textContent = 'N/A';
  }
};

function stopTrack() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
};

function resetBtns() {
  tracks.forEach(function(track) {
    let btn = document.querySelector('#' + track.id);
    if (btn) {
      btn.src = 'media/play.png';
    }
  });
};

function play(index) {
  if (index < 0 || index >= tracks.length) {
    return;
  };
  
  if (currentAudio && currentAudio !== (tracks[index]._audio || null)) {
    stopTrack();
  };
  
  currentTrackIndex = index;
  if (!tracks[index]._audio) {
    tracks[index]._audio = new Audio(tracks[index].audioPath);
  };

  currentAudio = tracks[index]._audio;
  if (isMuted) {
    currentAudio.volume = 0;
  } else {
    currentAudio.volume = 1;
  };

  currentAudio.play();
  isPlaying = true;
  pauza.src = 'media/pause.png';
  vinyl.classList.add('spinning');
  setTitle();
  resetBtns();
  let currentBtn = document.querySelector('#' + tracks[index].id);
  if (currentBtn) {
    currentBtn.src = 'media/pause.png';
  }
};

function toggle() {
  if (currentTrackIndex < 0 || !currentAudio) {
    return;
  }
  if (isPlaying) {
    currentAudio.pause();
    isPlaying = false;
    pauza.src = 'media/play.png';
    vinyl.classList.remove('spinning');
    let btn = document.querySelector('#' + tracks[currentTrackIndex].id);
    if (btn) {
      btn.src = 'media/play.png';
    }
  } else {
    currentAudio.play();
    isPlaying = true;
    pauza.src = 'media/pause.png';
    vinyl.classList.add('spinning');
    let btn2 = document.querySelector('#' + tracks[currentTrackIndex].id);
    if (btn2) {
      btn2.src = 'media/pause.png';
    }
  }
};

function next() {
  if (currentTrackIndex < 0) {
    return;
  }
  let nextIdx = currentTrackIndex + 1;
  if (nextIdx < tracks.length) {
    play(nextIdx);
  } else {
    stopTrack();
    currentTrackIndex = -1;
    currentAudio = null;
    isPlaying = false;
    pauza.src = 'media/play.png';
    vinyl.classList.remove('spinning');
    setTitle();
    resetBtns();
  }
};

function prev() {
  if (currentTrackIndex < 0) {
    return;
  }
  let prevIdx = currentTrackIndex - 1;
  if (prevIdx >= 0) {
    play(prevIdx);
  } else {
    stopTrack();
    currentTrackIndex = -1;
    currentAudio = null;
    isPlaying = false;
    pauza.src = 'media/play.png';
    vinyl.classList.remove('spinning');
    setTitle();
    resetBtns();
  }
};

function muteToggle() {
  isMuted = !isMuted;
  if (isMuted) {
    if (currentAudio) {
      currentAudio.volume = 0;
    }
    mute.src = 'media/mute_on.png';
  } else {
    if (currentAudio) {
      currentAudio.volume = 1;
    }
    mute.src = 'media/mute_off.png';
  }
};

tracks.forEach(function(track, index) {
  let btn = document.querySelector('#' + track.id);
  if (btn) {
    btn.addEventListener('click', function() {
      if (currentTrackIndex === index) {
        toggle();
      } else {
        play(index);
      }
    });
  }
});

if (back) {
  back.addEventListener('click', prev);
};
if (frwd) {
  frwd.addEventListener('click', next);
};
if (pauza) {
  pauza.addEventListener('click', toggle);
};
if (mute) {
  mute.addEventListener('click', muteToggle);
};

setTitle();