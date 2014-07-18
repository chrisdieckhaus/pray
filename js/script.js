
$(document).ready(function(){
  
    changeText();
    
    $("#button-div").on('mouseenter',function(){
      $(this).addClass("outer-hover");
    });
    
    $("#button-div").on('mouseleave',function(){
      $(this).removeClass("outer-hover");
      $(this).addClass("outer");
    });
    
    $(".outer").on('click',function(){
        console.log("Click");
        $("#prayer").slideUp(500);
	setTimeout(function(){changeText();}, 499);
	$("#prayer").slideDown(500);
    });
    
    
    });

var newPrayer = "Saint joseph's edgemont bola full frame butterfly house mountain goats tauro de taureau startup stampede, rolling hills the kress chapel hill street haussespekulant historic preservation listserv. Spekulant policial beaver queen southside plaid eno university saint joseph's bulle, nevermore blues ninth street spekulasyon yapmak polis we want oprah mountain goats, centro dpac duke forest yoga corporation zrva subaru.";

var prayerList = [
    {
        "text": "Prayer to St. Jude, patron of hopeless causes \n St. Jude, glorious apostle, faithful servant and friend of Jesus, \n the name of the traitor has caused you to be forgotten by many, \n but the true Church invokes you universally as the patron of things despaired of; \n pray for me, who am so downcast; \n pray for me, that finally I may receive the consolations and help of heaven in all my necessities, tribulations and sufferings, \n and that I may bless God with the elect throughout eternity. \n St. Jude Apostle, \n martyr and relative of our Lord Jesus Christ, \n of Mary, and of Joseph, \n intercede for us. \n Amen."
    },
    {
        "text": "Prayer for Serenity\nby Reinhold Niebuhr\nGod, grant me the serenity\nto accept the things I cannot change,\ncourage to change the things I can,\nAnd wisdom to know the difference.\nLiving one day at a time,\nEnjoying one moment at a time,\nAccepting hardship as a way to peace,\nTaking, as Jesus did,\nThis sinful world as it is,\nNot as I would have it,\nTrusting that You will make all things right,\nIf I surrender to Your will,\nSo that I may be reasonably happy in this life,\nAnd supremely happy with You forever in the next.\nAmen.\n"
    },
    {
        "text": "Act of Love\nO my God, I love you above all things, with my whole heart and soul, because you are all-good and worthy of all my love. I love my neighbor as myself for the love of you. I forgive all who have injured me and ask pardon of all who I have injured.\nAct of Hope\nO my God, relying on your almighty power, infinite mercy and promises, I hope to obtain pardon for my sins, the help of your grace, and life everlasting through the merits of Jesus Christ, my Lord and Redeemer.\nAct of Faith\nO my God, I firmly believe that you are one God in three divine Persons, Father, Son, and Holy Spirit. I believe that your divine Son became man, died for our sins, and that he will come to judge the living and the dead. I believe these and all the truths which the holy Catholic Church teaches, because you have revealed them, Who can neither deceive nor be deceived.\n"
    },
    {
        "text": "Prayer of Abandonment \nby. Ven. Charles de Foucauld\nFather, I abandon myself into Your hands;\nDo with me what You will.\nWhatever You may do\nI thank you;\nI am ready for all, I accept all.\nLet only Your will be done in me\nAnd in all Your creatures – \nI wish no more than this, O Lord.\nInto Your hands I commend my soul;\nI offer it to You\nWith all the love of my heart,\nFor I love You, Lord,\nAnd so need to give myself,\nTo surrender myself into Your hands,\nWithout reserve,\nAnd with boundless confidence,\nFor You are my Father.\n"
    },
    {
        "text": "Prayer Not to be Disturbed By St. Teresa of Avila\nLet nothing disturb you.\nLet nothing frighten you.\nAll things pass.\nGod never changes.\nPatience attains all that it strives for.\nHe who has God finds he lacks nothing.\nGod alone suffices.\n"
    },
    {
        "text": "Prayer to the Holy Spirit By St. Augustine\nBreathe in me, Holy Spirit,\nThat all my thoughts may be holy.\nMove in me, Holy Spirit,\nThat my work, too, may be holy.\nAttract my heart, Holy Spirit,\nThat I may love only what is holy.\nStrengthen me, Holy Spirit,\nThat I may defend all that is holy.\nProtect me, Holy Spirit,\nThat I always may be holy.\n"
    },
    {
        "text": "Prayer for Your Family\nLord Jesus, I pray for my family.\nBless those who help me\nAnd bless those who hurt me.\nBless those who are at home\nAnd bless those who are away fro home.\nBless those whom I find easy to love\nAnd bless those who I find\nDifficult/impossible to love.\nLord, bless al the members of my family who have died.\nBless them with eternal rest and peace.\nLord, bless all the members of my family.\n"
    },
    {
        "text": "Prayer of Thanksgiving\nAlmighty Father,\nYou are lavish in bestowing all your gifts,\nAnd we give thanks for the favors you have given to us.\nIn your goodness you have favored us and kept us safe in the past.\nWe ask that you continue to protect us and to shelter us in the shadow of your wings.\nWe ask this through Christ our Lord. Amen.\n"
    },
    {
        "text": "Prayer in Time of Sorrow\nFather of all mercies and God of consolation, you love us eternally and transform the shadows of death into the dawn of life. Look upon our grief; be our refuge and comfort so that our sadness and sorrow may turn into to the light and peace of your presence. In dying, your Son destroyed death; in rising, he restored life. Grant that at the end of our earthly pilgrimage we may be found in his company with our brothers and sisters. There you shall wipe away every tear. We ask this through Christ our Lord. Amen.\n"
    },
    {
        "text": "Prayer for When You’re Confused\nLord Jesus, I’m really confused.\nI really don’t know why\nAnd I don’t know what to do\nAnd I can’t help the way I fell.\nSo I’m coming to You.\nLord Jesus, speak a Word\nTo scatter the darkness\nIn my mind and heart.\nBurn away the clouds of uncertainty.\nShed a ray of Your Divine Light\nWith its healing rays to set me straight.\nMy mind, my heart, my body, my soul,\nI give to You… take control.\nJesus, I trust in You.\n"
    },
    {
        "text": "Prayer of St. Thérèse of Lisieux from The Story of A Soul\nOpen the Book of life, Lord Jesus,\nSee all the deeds recorded by the saints!\nAll these I want to perform for You!\nWhat can You say in the face of\nAll this foolishness of mine,\nFor surely I am the weakest soul on earth?\nYet just because I am so weak\nYou have been pleased to grant\nMy childish little desires,\nAnd now You will grant the rest,\nOther desires far greater than the Universe.\n"
    },
    {
        "text": "Prayer Before the Crucifix By St. Francis of Assisi\nMost high,\nGlorious God,\nEnlighten the darkness of my heart\nAnd give me, Lord,\nA correct faith,\nA correct hope,\nA perfect charity,\nSense and knowledge,\nSo that I may carry out Your holy and true command.\n"
    },
    {
        "text": "Prayer to Our Lady in Spanish\nMadre mía amantísima, en todos los instantes de mi vida, acordaos de mí, miserable pecador. Acueducto de las divinas gracias, concededme abundancia de lágrimas para llorar amargamente mis pecados.\nReina de cielos y tierra, sed mi amparo y defensa en las tentaciones de mis enemigos.\nIlustre y querida hija de Joaquín y Ana, alcanzadme de vuestro Divino Hijo las gracias que necesito para mi salvacíon. \nAbogado y refugio de los pecadores, asistidme en mi última agonía y abridme las puertas del Cielo.\n"
    },
    {
        "text": "Prayer to the Divine Infant Jesus\nOh Divine Infant Jesus,\nOmnipotent God\nWe implore you,\nThrough the powerful\nIntercession of your\nMost holy Mother\nIn your boundless\nMercy and omnipotence\nTo look favorably upon\nThe petition for which we so earnestly pray.\nOh Divine Infant Jesus\nHear our prayers\nAnd grant our petitions.\n"
    },
    {
        "text": "Daily Prayer to the Sacred Heart\nSacred Heart of Jesus today I wish to live in You, in Your grace, in which I desire at all costs to persevere.\nKeep me from sin and strengthen my will by helping me to keep watch over my senses,\nMy imagination, and my heart.\nHelp me to correct my faults which are the source of sin.\nI beg You to do this, O Jesus, through Mary, Your Immaculate Mother. Amen.\n"
    },
    {
        "text": "St. Catherine of Siena (feast day April 29)\nO marvelous wonder of the Church, seraphic virgin, Saint Catherine, because of your extraordinary virtue and immense good which you accomplished for the Church and society, you are acclaimed and blessed by all people.\nBy the sheer force of your personality you converted thousands, and the mere sight of you melted the hearts of hardened sinners.\nO St. Catherine, inspire me to reach into they lives of others and influence them for good, so that your name will be ever blessed and exalted.\nI call upon you with all my affection and beg you to obtain by your prayers the favors I so ardently desire. Amen.\n"
    },
    {
        "text": "Prayer to St. Joseph (indulgence, 3 years; plenary, under usual conditions, for month’s recitation)\nSt. Joseph, father and guardian of virgins, into whose faithful keeping were entrusted Innocency itself, Christ Jesus, and Mary, the Virgin of virgins, I pray and beseech thee through Jesus and Mary, those pledges so dear to thee, to keep me from all uncleanness, and to grant that my mind may be untainted, my heart pure and my body chaste; help me always to serve Jesus and Mary in perfect chastity. Amen\n"
    },
    {
        "text": "Prayer to St. Cecilia (feast day Nov. 22\nnd\n)\nO glorious saint, who chose to die\nInstead of denying your King,\nWe pray you please to help us\nAs His fair praise we sing!\nWe lift our hearts in joyous song\nTo honor Him this way,\nAnd while we sing, remembering\nTo sing is to doubly pray.\nAt once in our hearts and in our tongues\nWe offer double prayer\nSent heavenward on winged notes\nTo praise God dwelling there.\nWhile in our hearts and tongues we try\nWith song to praise God twice,\nWe ask dear saint, to help us be\nUnited close to Christ!\n"
    },
    {
        "text": "Prayer to the Immaculate Heart of Mary: Novena Prayer\nO Most Blessed Mother, heart of love, heart of mercy, every listening, caring, consoling, hear our prayer. As your children, we implore your intercession with Jesus your Son.\nReceive with understanding and compassion the petitions we place before you today, especially (special intention).\nWe are comforted in knowing your heart is ever open to those who ask for you prayer.\nWe trust to your gentle care and intercession, those whom we love and who are sick or lonely or hurting. Help all of us, Holy Mother to bear our burdens in this life until we may share eternal life and peace with God forever. Amen.\n"
    },
    {
        "text": "Prayer to St. Thomas Aquinas\nAngel of Schools, at the bidding of Peter,\nThousands today are saluting thee thus.\nWe too are claiming thy care and thy counsel,\nAngel of  Schools, be an Angel to us.\nCome to our aid when thou hearest us calling,\nLight up the dark, make the rough places plain,\nBring to our thoughts the unknown or forgotten,\nGive us the words that we seek for in vain.\n"
    },
    {
        "text": "Prayer in Honor of St. Lucy\nO God, our Creator and Redeemer, mercifully hear our prayers that as we venerate Thy servant, St. Lucy, for the light of faith Thou dist bestow upon her, Thou wouldst vouchsafe to increase and to preserve this same light in our souls, that we may be able to avoid evil, to do good and to abhor nothing so much as the blindness and the darkness of evil and of sin.\nRelying on Thy goodness, O God, we humbly ask Thee, by the intercession of Thy servant, St. Lucy that Thou wouldst give perfect vision to our eyes, that they may serve for Thy greater honor and glory, and for the salvation of our souls in this world, that we may come to the enjoyment of the unfailing light of the Lamb of God in paradise.\nSt. Lucy, virgin and martyr, hear our prayers and obtain our petitions.\n"
    },
    {
        "text": "Prayer to St. Maria Goretti\nHeroic and angelic St. Maria Goretti, we kneel before you to honor your preserving fortitude and to beg your gracious aid. Teach us a deep love the precepts of our Holy Church; and help us to see in them the very voice of our Father in heaven. May we preserve without stain our white baptismal robe of innocence. May we who have lost this innocence kneel humbly in Holy Penance; and with the absolution of Christ’s precious Blood flow into our souls and give us new courage to carry the burning light of God’s love through the dangerous highways of this life until Christ our King shall call us to the courts of heaven.\n"
    },
    {
        "text": "Prayer to St. Dominic\nO holy Priest of God and glorious Patriarch, St. Dominic, thou who wast the friend, the well-beloved son and confidant of the Queen of Heaven, and didst work so many miracles by the power of the Holy Rosary, have regard for my necessities.\nOn earth you opened your heart to the miseries of your fellow men and your hands were strong to help them; now in heaven your charity has not grown less nor has your power wane.\nPray for me to the Mother of the Rosary and to her divine Son, for I have great confidence that through your assistance I shall obtain the favor I so much desire. Amen.\n"
    },
    {
        "text": "THE PRAYER OF SAINT ANSELM IN TIME OF SPIRITUAL DRYNESS\nO supreme and inaccessible Light,\nO complete and blessed Truth,\nHow far You are from me,\nEven though I am so near to You!\nHow remote You are from my sight,\nEven though I am present to Yours!\nYou are everywhere in your entirety,\nAnd yet I do not see You;\nIn You I move and have my being,\nAnd yet I cannot approach You.\nO God, let me know You\nAnd love You so that I may find my joy in You;\nAnd if I cannot do so fully in this life,\nLet me at least make some progress every day,\nUntil at last that knowledge, love,\nAnd joy come to me in all their plentitude.\nAmen\n"
    },
    {
        "text": "Pater Noster\n"
    },
    {
        "text": "PATER NOSTER, qui es in caelis, sanctificetur nomen tuum. Adveniat regnum tuum. Fiat voluntas tua, sicut in caelo et in terra. \nPanem nostrum quotidianum da nobis hodie, et dimitte nobis debita nostra sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem, sed libera nos a malo. \nAmen.\nOur Father\nOUR FATHER, Who art in heaven hallowed be Thy name. Thy kingdom come; Thy will be done on earth, as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation; but deliver us from evil. \nAmen.\n"
    },
    {
        "text": "Ave Maria\nAVE MARIA, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc, et in hora mortis nostrae. \nAmen.\nHail Mary\nHAIL, MARY, full of grace; the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. \nAmen.\n"
    },
    {
        "text": "Salve Regina\nSALVE REGINA, Mater misericordiae. Vita, dulcedo, et spes nostra, salve. Ad te clamamus exsules filii Hevae. Ad te Suspiramus, gementes et flentes in hac lacrimarum valle. Eia ergo, Advocata nostra, illos tuos misericordes oculos ad nos converte. \nEt Iesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende. \nO clemens, o pia, o dulcis Virgo Maria. \nV. Ora pro nobis, Sancta Dei Genetrix.\n[object Object]\nR. Ut digni efficiamur promissionibus Christi. \nHail, Holy Queen\nHail, holy Queen, Mother of Mercy; our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve; to thee do we send up our sighs, mourning and weeping in this valley of tears.\nTurn, then, most gracious advocate, thine eyes of mercy towards us; and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. \nV. Pray for us, O holy Mother of God.\nR. That we may be made worthy of the promises of Christ. \n"
    },
    {
        "text": "Sancte Michael Archangele\nSancte Michael Archangele, defende nos in proelio, contra nequitiam et insidias diaboli esto praesidium. Imperet illi Deus, supplices deprecamur: tuque, Princeps militiae coelestis, Satanam aliosque spiritus malignos, qui ad perditionem animarum pervagantur in mundo, divina virtute, in infernum detrude. \nAmen.\nPrayer to Saint Michael\nSt. Michael the Archangel, defend us in battle; be our defense against the wickedness and snares of the devil. May God rebuke him, we humbly pray. And do thou, O prince of the heavenly host, by the power of God thrust into hell Satan and all the evil spirits who prowl about the world for the ruin of souls. Amen.\n"
    },
    {
        "text": "Prayer of St. Anselm to Mary Mother of Salvation\nMother of Salvation \nBlessed Lady, \nYou are the Mother of Justification \nAnd of those who are justified; \nThe Mother of Reconciliation \nAnd of those who are reconciled; \nThe Mother of Salvation \nAnd of those who are saved. \nWhat a blessed trust,\nand what a secure refuge! \nThe Mother of God is our Mother. \nThe Mother of the One in whom alone \nWe hope and whom alone we fear is our Mother!\nThe One who partook of our nature,\nAnd by restoring us to life \nMade us children of His Mother, \nInvites us by this to proclaim \nThat we are His brothers and sisters. \nTherefore, our Judge is also our Brother. \nThe Saviour of the world is our Brother. \nOur God has become, through Mary, our Brother!\n[object Object]\n"
    },
    {
        "text": "Prayer of St. Francis\nLord, make me an instrument of Your peace.\nWhere there is hatred, let me sow love;\nwhere there is injury, pardon;\nwhere there is doubt, faith;\nwhere there is despair, hope;\nwhere there is darkness, light;\nand where there is sadness, joy.\nO, Divine Master,\ngrant that I may not so much seek\nto be consoled as to console;\nto be understood as to understand;\nto be loved as to love;\nFor it is in giving that we receive;\nit is in pardoning that we are pardoned;\nand it is in dying that we are born to eternal life.\n"
    },
    {
        "text": "Individual Prayers for Meditation\nThe Jesus Prayer\nLord Jesus Christ, Son of God, have mercy on me, a sinner.\nSt. Francis’ Prayer:\nJesus, it’s me, ______ (your name).\n(In silence listen for the reply: ) ______ it’s me, Jesus.\nBless the Lord, my soul, and bless God's holy name, Bless the Lord, my soul, who leads me into life\nBe still and know that I am God.\nBe still and know that I am.\nBe still and know.\nBe still.\nBe.\n"
    },
    {
        "text": "Prayer by Saint Thomas Aquinas\nTANTUM ERGO\nDown in adoration falling,\nLo! the sacred host we hail;\nLo! o'er ancient forms departing,\nNewer rites of graces prevail;\nFaith for all defects supplying,\nWhere the feeble senses fail.\nTo the everlasting Father,\nAnd the Son, who reigns on high,\nWith the Holy Ghost proceeding\nForth from each eternally,\nBe salvation, honour, blessing,\nMight and endless majesty.\nAmen.\nV. Thou gavest them bread from heaven.\nR. And therein was sweetness of every kind.\nLet Us Pray.\nO God, Who, under this wonderful Sacrament,\nhast left unto us the memorials of Thy Passion;\ngrant us, we beseech Thee, \nso to venerate the sacred mysteries of Thy Body and Thy Blood,\nthat we may constantly experience within us the fruit of Thy redemption.\n"
    },
    {
        "text": "The Magnificat (English)\nMy soul proclaims the greatness of the Lord,\nMy spirit rejoices in God my Saviour,\nFor he has looked with favor on his lowly servant.\nFrom this day all generations will call me blessed:\nThe Almighty has done great things for me,\nAnd Holy is His Name.\nHe has mercy on those who fear Him,\nIn every generation.\nHe has shown the strength of his arm,\nHe has scattered the proud in their conceit.\nHe has cast down the mighty from their thrones,\nAnd has lifted up the lowly.\nHe has filled the hungry with good things,\nAnd the rich He has sent away empty.\nHe has come to the help of his servant Israel\nFor He has remembered His promise of mercy,\nThe promise He made to our fathers,\nTo Abraham and his children for ever.\nGlory be to the Father and to the Son and to the Holy Spirit. \nAs it was in the beginning, is now and ever shall be, world without end. Amen\n"
    },
    {
        "text": "The Magnificat (Latin)\nMagnificat anima mea Dominum;\nEt exultavit spiritus meus in Deo salutari meo,\nQuia respexit humilitatem ancillae suae; ecce enim ex hoc beatam me dicent omnes generationes.\nQuia fecit mihi magna qui potens est, et sanctum nomen ejus,\nEt misericordia ejus a progenie in progenies timentibus eum. \nFecit potentiam brachio suo; \nDispersit superbos mente cordis sui.\nDeposuit potentes de sede, et exaltavit humiles.\nEsurientes implevit bonis, et divites dimisit inanes. \nSucepit Israel, puerum suum, recordatus misericordiae suae,\nSicut locutus est ad patres nostros, Abraham et semeni ejus in saecula.\nGloria Patri, et Filio, et Spiritui Sancto.\nSicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen.\n"
    },
    {
        "text": "For our Enemies\nO God, the Father of all, whose Son commanded us to love our enemies: Lead them and us from prejudice to truth; deliver them and us from hatred, cruelty, and revenge; and in your good time enable us all to stand reconciled before you; through Jesus Christ our Lord. Amen.\n"
    },
    {
        "text": "PRAYER FOR A WILL TO PEACE\nAlmighty God, by whose grace we look for the day when nation shall not any more lift us sword against nation, nor people against people, and when mankind shall live without fear in security and peace, grant to us in this time of strife the will to labor for peace even while our sword is drawn to resist the oppressor. Let not the evil we oppose turn us from our purpose to achieve unity and concord among the nations of the earth, to your honor and glory, through Jesus Christ our Lord. Amen.\n"
    },
    {
        "text": "Litany of Saint Anthony of Padua\nLord, have mercy on us. \nChrist, have mercy on us. \nLord, have mercy on us.\nChrist, hear us. \nChrist, graciously hear us. \nGod, the Father of Heaven, have mercy on us. \nGod, the Son, Redeemer \nof the world, have mercy on us\nGod, the Holy Spirit, have mercy on us. \nHoly Trinity, one God, have mercy on us. \nHoly Mary, \nSaint Anthony of Padua, \nSaint Anthony, glory of the Friars Minor, \nSaint Anthony, ark of the testament, \nSaint Anthony, sanctuary of heavenly wisdom, \nSaint Anthony, destroyer of worldly vanity, \nSaint Anthony, conqueror of impurity, \nSaint Anthony, example of humility, \nSaint Anthony, lover of the Cross, \nSaint Anthony, martyr of desire, \nSaint Anthony, generator of charity, \nSaint Anthony, zealous for justice, \nSaint Anthony, terror of infidels, \nSaint Anthony, model of perfection, \nSaint Anthony, consoler of the afflicted, \nSaint Anthony, restorer of lost things, \nSaint Anthony, defender of innocence, \nSaint Anthony, liberator of prisoners, \nSaint Anthony, guide of pilgrims, \nSaint Anthony, restorer of health. \nSaint Anthony, performer of miracles, \nSaint Anthony, restorer of speech to the mute, \nSaint Anthony, restorer of hearing to the deaf, \nSaint Anthony, restorer of sight to the blind, \nSaint Anthony, disperser of devils, \nSaint Anthony, reviver of the dead. \nSaint Anthony, tamer of tyrants, \nFrom the snares of the devil, Saint Anthony deliver us. From thunder, lightning and storms, Saint Anthony deliver us. \nFrom all evil of body and soul, Saint Anthony deliver us. Through your intercession, Saint Anthony protect us. Throughout the course of life, Saint Anthony protect us. Lamb of God, who takes away the sins of the world, spare us, O Lord. \nLamb of God, who takes away the sins of the world, graciously hear us, O Lord. \nLamb of God, who takes away the sins of the world, have mercy on us. \nV. Saint Anthony, pray for us. \nR. That we may be made worthy of the promises of Christ. \nO my God, may the pious commemoration of Saint Anthony, your Confessor and Proctor, give joy to your Church, that she may ever be strengthened with your spiritual assistance and merit to attain everlasting joy. Through Christ our Lord. Amen.\n"
    },
    {
        "text": "Prayer to Saint Anthony of Padua, Guide of Pilgrims\nDear Saint Anthony, we are all pilgrims. We came from God and we are going to Him. He who created us will welcome us at journey's end. The Lord Jesus is preparing a place for all His brothers and sisters. Saint Anthony, Guide of Pilgrims, direct my steps in the straight path. Protect me until I am safely home in heaven. Help me in all my needs and difficulties. [name them] Franciscan Mission Associates\n"
    },
    {
        "text": "A Prayer to the North American Martyrs (Feast, September 26)\nDear Saints Isaac Jogues, John Brebeuf, Noel Chabanel, Gabriel Lalemant, Anthony Daniel, Charles Garnier, Rene Goupil and John Lalande, we beg of you, pray for the people of this vast country ours.\nYou are the first canonized saints of the United States and Canada. We are glad to have you. We are happy to honor you. You know our country and its needs, and we know you are in heaven praying for us.\nThere is one very special favor we wish to ask of you. Dear Saints of North America, pray God to send us another saint, or better still, a number of them. Ask Him to have soon--a man or a woman, a boy or a girl from this country of ours raised to the honors of the altar. Let it be a farmer or a laborer, a housewife or a schoolboy, born and bred in these United States. Let it be some one who lived his whole life here--a Saint Joseph of Carville County, or a Saint Mary of Middletown, or a Saint William of New York.\nWe do not wish to displace you in our affections, but to add to your glorious number. You understand our desires in this, and we feel sure that we will obtain this great blessing for the salvation of the people of this land. Remember us now, and obtain this great blessing for us from God. Help us always to cooperate with the graces that God so richly and generously gives us, through Jesus Christ our Lord. Amen.\nTHE MARIAN PRAYER OF\nPOPE JOHN-PAUL II\nMother of the Redeemer, \nwith great joy we call you blessed. \nIn order to carry out His plan of salvation,\nGod the Father chose you before the creation of the world.\nYou believed in His love and obeyed His word. \nThe Son of God desired you for His Mother \nwhen He became man to save the human race.\nYou received Him with ready obedience and undivided heart. \nThe Holy Spirit loved you as His mystical spouse \nand filled you with singular gifts.\nYou allowed yourself to be led \nby His hidden powerful action. \nOn the eve of the third Christian Millennium, \nwe entrust to you the Church \nwhich acknowledges you and invokes you as Mother. \nTo you, Mother of human family and of the nations,\nwe confidently entrust the whole humanity,\nwith its hopes and fears.\nDo no let it lack the light of true wisdom. \nGuide its steps in the ways of peace.\nEnable all to meet Christ,\nthe Way, the Truth, and the Life. \nSustain us, O Virgin Mary, on our journey of faith \nand obtain for us the grace of eternal salvation.\nO clement, O loving, O sweet Mother of God \nand our Mother, Mary! \n"
    },
    {
        "text": "THE PRAYER,\nMAJESTIC QUEEN OF HEAVEN\nMajestic Queen of Heaven and Mistress of the Angels, \nthou didst receive from God the power \nand commission to crush the head of Satan; \nwherefore we humbly beseech thee, \nsend forth the legions of heaven, \nthat, under thy command, \nthey may seek out all evil spirits, \nengage them everywhere in battle, \ncurb their insolence, \nand hurl them back into the pit of hell. \n\"Who is like unto God?\"\nO good and tender Mother, \nthou shalt ever be our hope \nand the object of our love. \nO Mother of God, \nsend forth the holy Angels to defend me \nand drive far from me the cruel foe.\nHoly Angels and Archangels, \ndefend us and keep us.\n"
    },
    {
        "text": "A PRAYER FOR AFTER\nTHE HOLY MASS\nMay the tribute of my humble ministry \nbe pleasing to Thee, Holy Trinity. \nGrant that the sacrifice which I, \nunworthy as I am, \nhave offered in the presence of Thy majesty \nmay be acceptable to Thee. \nThrough Thy mercy may it bring forgiveness to me \nand to all for whom I have offered it: \nthrough Christ our Lord. \nAmen. \n"
    },
    {
        "text": "A PRAYER TO SAY BEFORE\n[object Object]\nTHE HOLY MASS\nLet me be a holy sacrifice \nand unite with God in the sacrament of His greatest love. \nI want to be one in Him in this act of love, \nwhere He gives Himself to me and I give myself as a sacrifice to Him. \nLet me be a holy sacrifice as I become one with Him \nin this my act of greatest love to Him.\nLet me unite with Him more, \nthat I may more deeply love Him. \nMay I help make reparation to His adorable Heart \nand the heart of His Mother, Mary. \nWith greatest love, \nI offer myself to You \nand pray that You will accept my sacrifice of greatest love. \nI give myself to You and unite in Your gift of Yourself to me. \nCome and possess my soul. \nCleanse me, strengthen me, heal me. \nDear Holy Spirit act in the heart of Mary \nto make me more and more like Jesus. \nFather, I offer this my sacrifice, \nmyself united to Jesus in the Holy Spirit to You. \nHelp me to love God more deeply in this act of my greatest love. \nGive me the grace to grow in my knowledge, \nlove and service of You \nand for this to be my greatest participation in the Mass. \nGive me the greatest graces to love You so deeply in this Mass, \nYou who are so worthy of my love.\n"
    },
    {
        "text": "Litany of Humility\nRafael Cardinal Merry del Val (1865-1930),\nSecretary of State for Pope Saint Pius X\nO Jesus! meek and humble of heart, \nHear me.\nFrom\n[object Object]\nthe desire of being esteemed,\nDeliver me, Jesus.\n[object Object]\nFrom the desire of being loved...\nFrom the desire of being extolled ...\nFrom the desire of being honored ...\nFrom the desire of being praised ...\nFrom the desire of being preferred to others...\nFrom the desire of being consulted ...\nFrom the desire of being approved ...\nFrom the fear of being humiliated ...\nFrom\n[object Object]\nthe fear of being despised...\nFrom the fear of suffering rebukes ...\nFrom the fear of being calumniated ...\nFrom the fear of being forgotten ...\nFrom the fear of being ridiculed ...\nFrom the fear of being wronged ...\nFrom the fear of being suspected ...\nThat others may be loved more than I,\nJesus, grant me the grace to desire it.\nThat others may be esteemed more than I ...\nThat, in the opinion of the world,\nothers may increase and I may decrease ...\nThat others may be chosen and I set aside ...\nThat others may be praised and I unnoticed ...\nThat others may be preferred to me in everything...\nThat others may become holier than I,\n[object Object]\nprovided that I may become as holy as I should…\n"
    },
    {
        "text": "Radiating Christ\n(daily prayer of Mother Theresa’s Missionaries of Charity)\nDear Jesus, help me to spread Your fragrance everywhere I go. \nFlood my soul with Your spirit and life. \nPenetrate and possess my whole being so utterly \nthat all my life may only be a radiance of Yours. \nShine through me and be so in me \nthat every soul I come in contact with may feel Your presence in my soul. \nLet them look up and see no longer me but only Jesus! \nStay with me and then I shall begin to shine as You shine, \nso to shine as to be a light to others; \nthe light, O Jesus, will be all from You; \nnone of it will be mine: \nit will be You shining on others through me. \nLet me thus praise You in the way You love best: \nby shining on those around me. \nLet me preach You without preaching, not by words, but by my example, \nby the catching force, \nthe sympathetic influence of what I do, \nthe evident fullness of the love my heart bears to You. \n"
    },
    {
        "text": "The Anima Christi\n(The Anima Christi is a prayer from around the 14\nth\n century. It is still widely used after receiving the body and blood of Our Lord, Jesus Christ in Holy Communion.)\nSoul of Christ, sanctify me \nBody of Christ, save me \nBlood of Christ, inebriate me \nWater from Christ’s side, wash me \nPassion of Christ, strengthen me \nO good Jesus, hear me \nWithin Thy wounds hide me \nSuffer me not to be separated from Thee \nFrom the malicious enemy defend me \nIn the hour of my death call me \nAnd bid me come unto Thee \nThat I may praise Thee with Thy saints \nand with Thy angels \nForever and ever \nAmen\n"
    },
    {
        "text": "Act of Contrition\nO my God, I am heartily sorry for my sins. In choosing to do wrong and failing to do good, I have sinned against you and your church.  I firmly intend, with help of your grace, to repent, to sin no more, and to avoid temptation. Our Savior Jesus Christ suffered and died for us. In his name, my God, have mercy. \n"
    },
    {
        "text": "Acceptance of God’s Will\nIn all things may the most holy, the most just, and the most lovable will of God be done, \npraised, and exalted above all forever. Your will be done, O Lord, Your will be done. \nThe Lord has given, the Lord has taken away; blessed be the name of the Lord.\n"
    },
    {
        "text": "The Divine Praises\nBlessed be God.\nBlessed be His Holy Name.\nBlessed be Jesus Christ, true God and true man.\nBlessed be the name of Jesus.\nBlessed be His Most Sacred Heart.\nBlessed be Jesus in the Most Holy Sacrament of the Altar.\nBlessed be the Holy Spirit, the paraclete.\nBlessed be the great Mother of God, Mary most holy.\nBlessed be her holy and Immaculate Conception.\nBlessed be her glorious Assumption.\nBlessed be the name of Mary, Virgin and Mother.\nBlessed be Saint Joseph, her most chaste spouse.\nBlessed be God in His angels and in His Saints. \nMay the heart of Jesus, in the Most Blessed Sacrament, be praised, adored, and loved with grateful affection, at every moment, in all the tabernacles of the world, even to the end of time. Amen. \n"
    },
    {
        "text": "The Angelus\nThe Angel of the Lord declared unto Mary \nAnd she conceived of the Holy Spirit  \nHail Mary\nBehold the handmaid of the Lord, \nBe it done unto me according to Thy  word.\nHail Mary\nAnd the Word was made flesh,\nAnd dwelt among us. \nHail Mary\nPray for us, O holy Mother of God, \nThat we may be made worthy promises of Christ\nLet us pray \nPour forth, we beseech Thee, O Lord,\nThy grace into our hearts; that we,  to whom the Incarnation of your Son has been made known by the  message of an Angel, may, by His passion and cross, be brought to the glory of His resurrection. Through Christ our Lord. Amen. \n"
    },
    {
        "text": "Chaplet of Divine Mercy\n[object Object]\nEternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, our Lord Jesus Christ, in atonement for our sins and those of the whole world. \n (on each of the “Our Father” beads of a rosary)\nFor the sake of Your sorrowful passion, have mercy on us and on the whole world. \n(on each of the 10 “Hail Mary” beads)\nHoly God, Holy Mighty One, Holy Immortal One, have mercy on us, and on the whole world. O Blood and Water which gushed \nforth from t\nh\ne\n Heart of Jesus as a fountain of Mercy for us, I trust in You. \n (3 times)\nJesus, I trust in you.\nIn the name of the Father, and of the Son, and of the Holy Spirit. Amen.\n"
    },
    {
        "text": "Good Morning God!\nGood Morning God! You are ushering in another day, untouched and freshly new. So here I am to ask you, God, if you’ll renew me too. \nForgive the many errors that I made yesterday and let me try again dear God to walk closer in your way. \nBut Lord, I am well aware, I can’t make it on my own. So take my hand and hold it tight, for I cannot walk alone. \n"
    },
    {
        "text": "Prayer Before A Crucifix\nLook down upon me, good and gentle Jesus, while before Your face I humbly kneel and, with burning soul, pray and beseech You to fix deep in my heart lively sentiments of faith, hope and charity; true contrition for my sins, and a firm purpose of amendment. \nWhile I contemplate, with great love and tender pity, Your five most precious wounds, pondering over them within me and calling to mind the words which David, Your prophet, said of Your, my Jesus: \n“They have pierced My hands and My feet, they have numbered all My bones.” \nAmen. \n"
    },
    {
        "text": "Childhood Nighttime Prayers\nNow I lay me down to sleep\nI pray the Lord my soul to keep.\nIf I should die before I wake,\nI pray the Lord, my soul, to take.\nAmen.\nDear God, I thank you for your care\nYou’ve been right with me everywhere.\nAnd when the sun has said good-bye\nAnd little stars shine in the sky\nYou’re still with me not far above\nRight in my heart for you are love. Amen.\n"
    },
    {
        "text": "Morning Offering\nO Jesus,\nthrough the Immaculate Heart of Mary,\nI offer You my prayers, works,\njoys and sufferings\nof this day for all the intentions\nof Your Sacred Heart,\nin union with the Holy Sacrifice of the Mass\nthroughout the world,\nin reparation for my sins,\nfor the intentions of all my relatives and friends,\nand in particular\nfor the intentions of the Holy Father. \nAmen.\n"
    },
    {
        "text": "Lectio Divina\nChoose a passage of scripture (around 10 verses is recommended – can be chosen at will, or a nice idea is to meditate on the next Sunday’s readings)\nAfter first read through, identify/say/meditate on one word or phrase that sticks out to you: like “Be still”  “follow” or “and they obeyed”.. anything that hits you.\nAfter second read through, identify another word or phrase that hits you, even if it ends up being the same as the first.  But, a new one is always nice.\nAfter the third read through, identify the overall theme, or the take-home message that you get from it.\nAfter the fourth read through, pray about the passage, bringing what you’ve learned to God and asking for help applying the lessons and meditations to your life.\n"
    },
    {
        "text": "Guardian Angel Prayer\n[object Object]\n[object Object]\nAngel of God, My Guardian Dear\n to whom God’s love commits me here.\n Ever this day be at my side\n to light and guard and rule and guide.\nAmen. \n"
    },
    {
        "text": "CHAPLET TO THE MOTHER OF THE MOST HOLY EUCHARIST\nHow to pray the Chaplet to the Mother of the Most Holy Eucharist\nThis devotion is prayed on the regular 59 beads Marian Rosary.\nYou begin by doing the “\n.”\nOn the first large bead, pray the “\n.”\nOn the next 3 small beads, pray 3 “\n.”\nOn the next large bead, pray:\n”My God, I love you with my whole heart,\nI repent of ever having offended You,\nnever permit me to offend You again,\ngrant that I may love You always,\nand then do with me what You will.\nAmen”\nBefore each decade, on the large bead, say the following prayer:\n”Hail Mary,\n0 Mother of the Most Holy Eucharist,\nhelp me to believe completely,\nhelp me to love completely,\nhelp me to live what I believe\nand love completely.”\nOn the 10 small beads, pray:\n”0 Mother help me!\nThen say the “\n.”\nConclude with:\n”Dearest Mother,\nI Believe, that Jesus Christ,\nyour Son is truly present\nin the Sacrament of the Most Holy Eucharist,\nBody, Blood, Soul and Divinity.\nI Believe, that He is the,\nonly begotten Son of God,\nWho became Man to save me, a sinner.\nBy partaking of this Most Holy Sacrament,\nI profess:\nThat I believe in the One,\nHoly, Catholic and Apostolic Church\nand that Her teachings and sacraments\nwere instituted by Christ.\nThat because this\nis truly His Precious Body\nand life giving Blood,\nto receive Him in the state of grace\nwill bring healing to both\nmy soul and body\nbut knowingly receive Him\nin the state of mortal sin\nwill bring me judgement and condemnation.\nDearest Virgin of Virgins,\nI declare these truths\nbefore You as my Witness,\nthat You who are the great Mother of God.\nMay you remember me before my Lord and Master,\nnow and at the hour of my death.\nAmen.”\n”0 Mother of the Most Holy Eucharist,\nPray for us.” (repeat three times)\n"
    },
    {
        "text": "Thomas Merton Prayer\nMY LORD GOD, I have no idea where I am going. I do not see the road ahead of me. I cannot know for certain where it will end. Nor do I really know myself, and the fact that I think that I am following your will does not mean that I am actually doing so. But I believe that the desire to please you does in fact please you. And I hope I have that desire in all that I am doing. I hope that I will never do anything apart from that desire. And I know that if I do this you will lead me by the right road though I may know nothing about it. Therefore will I trust you always though I may seem to be lost and in the shadow of death. I will not fear, for you are ever with me, and you will never leave me to face my perils alone.\nAmen.\n"
    },
    {
        "text": "Dear Saints Teach me....\nSt. Ann, teach me to love your daughter Mary\nHoly Mary, teach me to become more and more worthy of the promises of Christ\nSt. Joseph, teach me the virtue of silence\nSt. Daniel teach me wisdom\nSt. Michael teach me to conquer the devil\nSt. John the Baptist, teach me mortification\nSt. John the Beloved, teach me pure love of Jesus\nSt. Peter teach me fidelity\nSt. Paul teach me zeal for the salvation of souls\nSt. Thomas teach me to overcome doubt\nSt. Stephen, teach me the spirit of martyrdom\nSt. Simon of Cyrene, teach me love of the Cross\nSt. Veronica, teach me concern for the afflicted\nSt. Mary Magdalene, teach me repentance\nSt. Dismas (good thief) teach me how to “steal” Paradise\nSt. Agnes, teach me purity\nSt. Maria Goretti, teach me resistance to temptation\nSt. Jerome, teach me love of the Holy Scriptures\nSt. Monica, teach me steadfastness in prayer\nSt. Augustine, teach me respect for a mothers prayers\nSt. Francis Borgia, teach me to despise earthly vanities\nSt. Francis De Sales teach me always to smile\nSt. Francis of Assisi teach me humility\nSt. Francis Xavier, teach me zeal for the missions\nSt. Philip Neri, teach me cheerfulness\nSt. Thomas More, teach me to “keep my head”\nSt. Anthony teach me to “find” sanctity\nSt. Pascal, teach me love of the Holy Mass\nSt. John Vianney teach me respect for the holy priesthood\nSt. Thomas Aquinas, teach me love of divine contemplation\nSt. Albert the Great teach me love of heavenly wisdom\nSt. Vicent de Paul teach me love of the poor\nSt. Elizabeth teach me to break bread for the downtrodden\nSt. Camillus teach me to visit the sick\nSt. John Bosco teach me love of the Youth\nSt. Margaret Mary teach me love the Sacred Heart\nSt. Therese teach me the value of “little things” and how to do all for the honor and glory of God.\nAll you holy men and woman pray for us.....Amen\nJesus, I Trust in You! (In Praise of Divine Mercy) \nStrength at the altar,\nCourage from above\nWhen I’m ready to falter,\nYou reach out in love \nHold me to Your heart,\nWhen I’m weary and weak\nI don’t have the strength,\nBut You give what I seek \nPray to the Father,\nFollowing the Son\nShow me the Spirit,\nYou Three in One \nSee me kneeling.\nWretched as I am\nGraces from Heaven,\nBlessings from Your hand \nMother hold me close,\nAs I cry from the heart\nBrothers and sisters,\nHelp me stand apart \nCrying the soul’s tears,\n“To whom should I go?”\nYou reach out to hold me\nYou always seem to know\nThe solution to my struggle\nThe answer before I ask\nThe strength for what’s ahead\nThe courage that I lack \nHelp me to give my all\n& To cry out with truth\nThat though I fail alone\n“Jesus, I trust in You!” \nb\ny Mary Lovee Klipp\n[object Object]\n"
    },
    {
        "text": "Lovely Lady Dressed in Blue\nLovely Lady dressed in blue\nTeach me how to pray!\nGod was just your little boy,\nTell me what to say!\nDid you lift Him up, sometimes,\nGently on your knee?\nDid you sing to Him the way\nMother does to me?\nDid you hold His hand at night?\nDid you ever try\nTelling stories of the world?\nO! And did He cry?\nDo you really think He cares\nIf I tell Him things-\nLittle things that happen? And\nDo the Angels’ wings\n   Make a noise? And can He hear\nMe if I speak\n real\n low?\nDoes He understand me now?\nTell me- for you know?\nLovely Lady dressed in blue-\nTeach me how to pray!\nGod was just your little boy,\nAnd you know the way.\n"
    },
    {
        "text": "The Memorare\nRemember, O Most Gracious Virgin Mary,\nthat never was it known that anyone who fled to Thy protection,\nimplored Thy help or sought Thine intercession,\nwas left unaided.\nInspired by this confidence,\nI fly unto Thee, O Virgin of Virgins, my Mother;\nto Thee do I come, before thee I stand, sinful and sorrowful.\nO Mother of the Word Incarnate,\ndespise not my petitions,\nbut in Thy mercy, hear and answer me.\nAmen.\n"
    },
    {
        "text": "St Michael the Archangel Prayer\nSt. Michael the Archangel, defend us in battle.\nBe our protection against the wickedness and snares of the devil.\nMay God rebuke him, we humbly pray.\nAnd do you, O prince of the Heavenly Host,\nBy the power of God\nCast into Hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls.\nAmen.\n"
    }
]

function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
};

function changeText(){
  var index = getRandomInt(0, prayerList.length);
  var prayer = prayerList[index]["text"].split("\n");
  for (var i=0; i<prayer.length; i++){
    $("#pray").append("<p style='margin:5px; line-height: 160%;'>"+prayer[i]+"</p>");
    }
  
  
};

