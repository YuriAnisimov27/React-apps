export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Futbich',
      author: 'Cherchesov',
      price: 100,
      coverImage: 'https://m.footballdatabase.eu/images/photos/players/a_13/13970.jpg'
    },
    {
      id: 2,
      title: 'Hair Master',
      author: 'Onopko',
      price: 20,
      coverImage: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Viktor_Onopko_2011.jpg'
    },
    {
      id: 3,
      title: 'Dumb',
      author: 'Buzova',
      price: 50,
      coverImage: 'https://www.kxan36news.com/wp-content/uploads/2020/07/httpsnews.rambler.ruimg20200712173457.050452.1386.jpg.jpg'
    },
  ];

  getBooks() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }
}
