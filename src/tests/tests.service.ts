import { Injectable } from '@nestjs/common';

@Injectable()
export class TestsService {
  tests = [
    {
      question: 'Question 1',
      options: ['opt 1', 'opt 2', 'opt 3', 'opt 3'],
    },
    // {
    //   question: 'Question 2',
    //   options: ['opt 1', 'opt 2', 'opt 3', 'opt 3'],
    // },
    // {
    //   question: 'Question 3',
    //   options: ['opt 1', 'opt 2', 'opt 3', 'opt 3'],
    // },
    // {
    //   question: 'Question 4',
    //   options: ['opt 1', 'opt 2', 'opt 3', 'opt 3'],
    // },
    // {
    //   question: 'Question 5',
    //   options: ['opt 1', 'opt 2', 'opt 3', 'opt 3'],
    // },
  ];

  getTests() {
    return this.tests;
  }

  createTest(data) {
    console.log(data);
    this.tests.push(data);
  }
}
