import {Category} from '../models/Category';
import {Priority} from '../models/Priority';
import {Task} from '../models/Task';

export class TestData {

  static categories: Category[] = [
    {id: 1, title:  'Work'},
    {id: 2, title:  'Family'},
    {id: 3, title:  'Study'},
    {id: 4, title:  'Leisure'},
    {id: 5, title:  'Sport'},
    {id: 6, title:  'Food'},
    {id: 7, title:  'Finances'},
    {id: 8, title:  'Gadgets'},
    {id: 9, title:  'Health'},
    {id: 10, title: 'Car'},
    {id: 11, title: 'Repairs'},
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Low', color: '#e5e5e5'},
    {id: 2, title: 'Medium', color: '#85D1B2'},
    {id: 3, title: 'High', color: '#F1828D'},
    {id: 4, title: 'Urgent', color: '#F1128D'}
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Fill the gas tank',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2019-04-10')
    },

    {
      id: 2,
      title: 'Submit reports to the department head',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2019-04-11')
    },

    {
      id: 3,
      title: 'Tidy up the room, water the plants',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1]
    },

    {
      id: 4,
      title: 'Go to the park with family, invite friends',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2019-08-17')
    },
    {
      id: 5,
      title: 'Find and study a quantum physics textbook',
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 6,
      title: 'Attend a programming seminar',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2019-06-11')
    },

    {
      id: 7,
      title: 'Find tickets to Turkey, choose a hotel',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3]
    },
    {
      id: 8,
      title: 'Cook dinner for the whole family (salmon with potatoes)',
      completed: false,
      category: TestData.categories[5]
    },
    {
      id: 9,
      title: 'Do 10 pull-ups',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2019-03-12')
    },
    {
      id: 10,
      title: 'Run 100 m',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[4]
    },

    {
      id: 11,
      title: 'Organize a children\'s party ',
      completed: false
    },

    {
      id: 12,
      title: 'Attend a lecture "How to learn Java programming"',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 13,
      title: 'Buy groceries for the week',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2019-05-11')
    },

    {
      id: 14,
      title: 'Hold a meeting regarding all projects',
      completed: true,
      category: TestData.categories[0]
    },

    {
      id: 15,
      title: 'Take the Java exam',
      priority: TestData.priorities[2],
      completed: true
    },


    {
      id: 16,
      title: 'Deposit 100,000 rubles in the bank',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[6]
    },

    {
      id: 17,
      title: 'Ask for an advance at work',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[6]
    },

    {
      id: 18,
      title: 'Take tests, check hemoglobin level',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2020-12-11')

    },

    {
      id: 19,
      title: 'Compare the new iPad with Samsung',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2019-10-11')

    },

    {
      id: 20,
      title: 'Football with colleagues',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2019-03-17')

    }

  ];

}
