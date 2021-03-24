import {Book} from './interfaces';

export const books: Book[] = [
  {
    title: 'Adventure of Don Quixote',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/41JKGW9P6AL._SX372_BO1,204,203,200_.jpg',
    description: 'Don Quixote, fully titled The Ingenious Gentleman Don Quixote of La Mancha (Spanish: El ingenioso hidalgo don ' +
      'Quijote de la Mancha), is a Spanish novel by Miguel de Cervantes Saavedra. Published in two volumes, in 1605 and 1615, Don' +
      ' Quixote is considered one of the most influential works of literature from the Spanish Golden Age and the entire Spanish ' +
      'literary canon. As a founding work of modern Western literature and one of the earliest canonical novels, it regularly appears ' +
      'high on lists of the greatest works of fiction ever published, such as the Bokklubben World Library collection that cites Don' +
      ' Quixote as authors\' choice for the "best literary work ever written".\n' +
      '\n' +
      'The story follows the adventures of a hidalgo named Mr. Alonso Quixano who reads so many chivalric romances that he loses ' +
      'his sanity and decides to set out to revive chivalry, undo wrongs, and bring justice to the world, under the name Don Quixote ' +
      'de la Mancha. He recruits a simple farmer, Sancho Panza, as his squire, who often employs a unique, earthy wit in dealing with' +
      ' Don Quixote\'s rhetorical orations on antiquated knighthood. Don Quixote, in the first part of the book, does not see the world' +
      ' for what it is and prefers to imagine that he is living out a knightly story. Throughout the novel, Cervantes uses such' +
      ' literary techniques as realism, metatheatre, and intertextuality. It had a major influence on the literary community, as ' +
      'evidenced by direct references in Alexandre Dumas\' The Three Musketeers (1844), Mark Twain\'s Adventures of Huckleberry Finn' +
      ' (1884) and Edmond Rostand\'s Cyrano de Bergerac (1897), as well as the word "quixotic". Arthur Schopenhauer cited Don Quixote' +
      ' as one of the four greatest novels ever written, along with Tristram Shandy, La Nouvelle Héloïse and Wilhelm Meister.',
    author: 'Miguel de Cervantes',
    publisher: 'LVL Editions',
    ISBN: '9786050431773',
    releaseYear: 2016,
    rating: 4,
    notes: [],
    reviews: [{
      fullName: 'David McCollough',
      review: 'Miguel de Cervantes (1547-1616) was a Spanish writer whose work included plays, poetry, short stories, and novels.' +
        ' Although much of the details of his life are a mystery, his experiences as both a soldier and as a slave in captivity ' +
        'are well documented; these events served as subject matter for his best-known work, Don Quixote (1605) as well as many' +
        ' of his short stories. Although Cervantes reached a degree of literary fame during his lifetime, he never became financially' +
        ' prosperous; yet his work is considered among the most influential in the development of world literature.'
    }]
  },
  {
    title: 'Divine Comedy',
    coverUrl: 'https://m.media-amazon.com/images/I/51Q1ncll-YL.jpg',
    description: 'Dante Alighieri\'s poetic masterpiece, The Divine Comedy, is a moving human drama, an unforgettable visionary journey' +
      ' through the infinite torment of Hell, up the arduous slopes of Purgatory, and on to the glorious realm of Paradise-the sphere ' +
      'of universal harmony and eternal salvation.',
    author: 'Dante Alighieri',
    publisher: 'Booklassic',
    ISBN: '9781614303640',
    releaseYear: 2015,
    rating: 5,
    totalPages: 728,
    notes: ['The poem, The Divine Comedy, is about a journey of the author himself, towards God. It has three parts: Inferno (Hell), ' +
    'Purgatorio (Purgatory) and Paradiso (Heaven).',
      ' Each part consists of thirty-three cantos. Such division reflects the medieval theology specific to Christianity.',
      ' The purpose of Dante’s Divine Comedy was to show people the horrors their souls would go through if they did not obey God\'s ' +
      'laws, and did not live their lives righteously.\n'],
    reviews: [{
      fullName: 'Maggie Hyde',
      review:
        'Dante Alighieri was an Italian poet of the Middle Ages, best known for his masterpiece, the epic Divine Comedy, considered to be' +
        ' one of the greatest poetic works in literature. A native of Florence, Dante was deeply involved in his city-state’s' +
        ' politics and had political, as well as poetic, ambitions. He was exiled from Florence in 1301 for backing the losing ' +
        'faction in a dispute over the pope’s influence, and never saw Florence again. While in exile, Dante wrote the Comedy,' +
        ' the tale of the poet’s pilgrimage through Hell, Purgatory, and Paradise. To reach the largest possible audience for the work, ' +
        'Dante devised a version of Italian based largely on his own Tuscan dialect and incorporating Latin and parts of other regional' +
        ' dialects. In so doing, he demonstrated the vernacular’s fitness for artistic expression, and earned the title “Father of the' +
        ' Italian language.” Dante died in Ravenna in 1321, and his body remains there despite the fact that Florence erected a tomb ' +
        'for him in 1829.\n'
    },
      {
        fullName: 'James Carse',
        review: 'Dante Alighieri was an Italian poet of the Middle Ages, best known for his masterpiece, the epic Divine Comedy,' +
          ' considered to be one of the greatest poetic works in literature. A native of Florence, Dante was deeply involved in his ' +
          'city-state’s politics and had political, as well as poetic, ambitions. He was exiled from Florence in 1301 for backing the' +
          ' losing faction in a dispute over the pope’s influence, and never saw Florence again. While in exile, Dante wrote the Comedy, ' +
          'the tale of the poet’s pilgrimage through Hell, Purgatory, and Paradise. To reach the largest possible audience for the work,' +
          ' Dante devised a version of Italian based largely on his own Tuscan dialect and incorporating Latin and parts of other' +
          ' regional dialects. In so doing, he demonstrated the vernacular’s fitness for artistic expression, and earned the title' +
          ' “Father of the Italian language.” Dante died in Ravenna in 1321, and his body remains there despite the fact that' +
          ' Florence erected a tomb for him in 1829.\n'
      }]
  },
  {
    title: 'Сrime and Punishment',
    coverUrl: 'https://images.penguinrandomhouse.com/cover/9780679420293',
    description: 'Crime and Punishment is a novel by the Russian author Fyodor Dostoyevsky. It was first published in the literary' +
      ' journal The Russian Messenger in twelve monthly installments during 1866. It was later published in a single volume. It is ' +
      'the second of Dostoyevsky\'s full-length novels following his return from 10 years of exile in Siberia. Crime and Punishment' +
      ' is considered the first great novel of his "mature" period of writing Crime and Punishment focuses on the mental anguish' +
      ' and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in St. Petersburg who formulates and executes a plan ' +
      'to kill an unscrupulous pawnbroker for her cash. Raskolnikov, in attempts to defend his actions, argues that with the ' +
      'pawnbroker\'s money he can perform good deeds to counterbalance the crime, while ridding the world of a vermin. He also ' +
      'commits the murder to test a theory of his that dictates some people are naturally capable of such actions, and even ' +
      'have the right to perform them. Several times throughout the novel, Raskolnikov compares himself with Napoleon Bonaparte' +
      ' and shares his belief that murder is permissible in pursuit of a higher purpose.',
    author: 'Fyodor Dostoyevsky',
    publisher: '9788892562172',
    ISBN: '9788892562172',
    releaseYear: 2016,
    rating: 5,
    notes: [
      'Fyodor Dostoyevsky was born in Moscow in 1821. He died in 1881 having written some of the most celebrated works in the ' +
      'history of literature, including Crime and Punishment, The Idiot, and The Brothers Karamazov.',
      'Crime and Punishment focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student ' +
      'in Saint Petersburg who formulates a plan to kill an unscrupulous pawnbroker for her money.'
    ],
  },
  {
    title: 'Mockingbird',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/71VfLHA0fDL.jpg',
    description: 'In Mockingbird—a poignant gem by acclaimed author Kathryn Erskine—a talented young artist struggles to overcome' +
      ' a disability. Diagnosed with Asperger’s syndrome, 10-year-old Caitlin faces a range of social and emotional challenges.' +
      ' The unexpected death of her caring brother makes matters even worse, but will the memory of his words of wisdom and the' +
      ' help of a compassionate counselor be enough to enable her to connect with others? “Erskine’s moving and insightful' +
      ' masterpiece delivers a compelling message for all.”—Publishers Weekly',
    author: 'Kathryn Erskine',
    publisher: 'Recorded Books Audio',
    ISBN: '9781449824747',
    totalPages: 125,
    releaseYear: 2010,
    rating: 3,
  },
];
