var tasksByType = [{"type": "1", "open": 100, "pd": 30, "app":20},
{"type": "2", "open": 130,  "pd": 20, "app":19},
{"type": "3", "open": 80, "pd": 50, "app":10},
{"type": "4", "open": 200, "pd": 80, "app":20},
{"type": "5", "open": 50, "pd": 20, "app":20},
{"type": "6", "open": 100,  "pd": 10, "app":20},
{"type": "7", "open": 80,  "pd": 25, "app":30},
{"type": "8", "open": 150, "pd": 70, "app":54},
{"type": "9", "open": 50, "pd": 10, "app":20},
{"type": "10", "open": 85, "pd": 30, "app":20}
];

var person1 = [{"type": "1", "open": 2, "pd": 2, "app":4},
               {"type": "2", "open": 3,  "pd": 0, "app":19},
               {"type": "3", "open": 10, "pd": 2, "app":10},
               {"type": "4", "open": 12, "pd": 3, "app":20},
               {"type": "5", "open": 5, "pd": 1, "app":20},
               {"type": "6", "open": 8,  "pd": 2, "app":20},
               {"type": "7", "open": 3,  "pd": 0, "app":30},
               {"type": "8", "open": 12, "pd": 5, "app":54},
               {"type": "9", "open": 5, "pd": 0, "app":20},
               {"type": "10", "open": 8, "pd": 2, "app":20}
               ];

var person2 = [{"type": "1", "open": 12, "pd": 2, "app":4},
               {"type": "2", "open": 13,  "pd": 0, "app":19},
               {"type": "3", "open": 15, "pd": 8, "app":10},
               {"type": "4", "open": 12, "pd": 3, "app":20},
               {"type": "5", "open": 8, "pd": 0, "app":20},
               {"type": "6", "open": 3,  "pd": 2, "app":20},
               {"type": "7", "open": 23,  "pd": 0, "app":30},
               {"type": "8", "open": 12, "pd": 5, "app":54},
               {"type": "9", "open": 8, "pd": 3, "app":20},
               {"type": "10", "open": 8, "pd": 2, "app":20}
               ];

var person3 = [{"type": "1", "open": 2, "pd": 2, "app":4},
               {"type": "2", "open": 3,  "pd":2, "app":19},
               {"type": "3", "open": 8, "pd": 5, "app":10},
               {"type": "4", "open": 10, "pd": 7, "app":20},
               {"type": "5", "open": 5, "pd": 3, "app":20},
               {"type": "6", "open": 8,  "pd": 4, "app":20},
               {"type": "7", "open": 3,  "pd": 0, "app":30},
               {"type": "8", "open": 12, "pd": 7, "app":54},
               {"type": "9", "open": 5, "pd": 4, "app":20},
               {"type": "10", "open": 8, "pd": 5, "app":20}
               ];
var person4 = [{"type": "1", "open": 22, "pd": 20, "app":4},
               {"type": "2", "open": 23,  "pd": 15, "app":19},
               {"type": "3", "open": 10, "pd": 2, "app":10},
               {"type": "4", "open": 22, "pd": 10, "app":20},
               {"type": "5", "open": 15, "pd": 1, "app":20},
               {"type": "6", "open": 18,  "pd": 2, "app":20},
               {"type": "7", "open": 0,  "pd": 0, "app":30},
               {"type": "8", "open": 12, "pd": 5, "app":54},
               {"type": "9", "open": 30, "pd": 6, "app":20},
               {"type": "10", "open": 8, "pd": 3, "app":20}
               ];

var person5 = [{"type": "1", "open": 2, "pd": 2, "app":4},
               {"type": "2", "open": 3,  "pd": 1, "app":19},
               {"type": "3", "open": 3, "pd": 2, "app":10},
               {"type": "4", "open": 5, "pd": 1, "app":20},
               {"type": "5", "open": 5, "pd": 1, "app":20},
               {"type": "6", "open": 2,  "pd": 2, "app":20},
               {"type": "7", "open": 6,  "pd": 0, "app":30},
               {"type": "8", "open": 8, "pd": 4, "app":54},
               {"type": "9", "open": 5, "pd": 0, "app":20},
               {"type": "10", "open": 7, "pd": 2, "app":20}
               ];

var tasksByTeam = [{"type": "Mike", "open": 100, "pd": 30, "app":20},
                     {"type": "Melissa", "open": 130, "pd": 20, "app":19},
                     {"type": "Kevin", "open": 80,  "pd": 50, "app":10},
                     {"type": "John", "open": 200,  "pd": 80, "app":20},
                     {"type": "Jessica", "open": 50,  "pd": 20, "app":20}
                     ];
	

var testOne ={
		  "manager": {
			    "shortname": "jbradsha",
			    "username": "Jeffery Bradshaw",
			    "email": "jbradsha@militarycars.com",
			    "manager": "Robert Hagan",
			    "status": 2
			  },
			  "team": [
			    {
			      "shortname": "adaniel",
			      "username": "Amanda Daniel",
			      "email": "adaniel@militarycars.com",
			      "manager": "Jeffery Bradshaw",
			      "status": 0
			    },
			    {
			      "shortname": "adavis",
			      "username": "Alonso Davis",
			      "email": "adavis@militarycars.com",
			      "manager": "Jeffery Bradshaw",
			      "status": 0
			    },
			    {
			      "shortname": "awells",
			      "username": "Adam Wells",
			      "email": "awells@militarycars.com",
			      "manager": "Jeffery Bradshaw",
			      "status": 3
			    },
			    {
			      "shortname": "bkramer",
			      "username": "Brian Kramer",
			      "email": "bkramer@militarycars.com",
			      "manager": "Jeffery Bradshaw",
			      "status": 1
			    },
			    {
			      "shortname": "pfarro",
			      "username": "Paul Farro",
			      "email": "pfarro@militarycars.com",
			      "manager": "Jeffery Bradshaw",
			      "status": 0
			    },
			    {
			      "shortname": "tmckinne",
			      "username": "Timothy McKinney",
			      "email": "tmckinne@militarycars.com",
			      "manager": "Jeffery Bradshaw",
			      "status": 1
			    },
			    {
			      "shortname": "tsimmons",
			      "username": "Tyrone Simmons",
			      "email": "tsimmons@militarycars.com",
			      "manager": "Jeffery Bradshaw",
			      "status": 3
			    },
			    {
			      "shortname": "edow",
			      "username": "Errol Dow",
			      "email": "edow@militarycars.com",
			      "manager": "Jeffery Bradshaw",
			      "status": 0
			    },
			    {
			      "shortname": "chouse",
			      "username": "Charles House",
			      "email": "chouse@militarycars.com",
			      "manager": "Jeffery Bradshaw",
			      "status": 0
			    },
			    {
			      "shortname": "cosime",
			      "username": "Christopher Osime",
			      "email": "cosime@militarycars.com",
			      "manager": "Jeffery Bradshaw",
			      "status": 0
			    },
			    {
			      "shortname": "jrunnell",
			      "username": "Joshua Runnells",
			      "email": "jrunnell@militarycars.com",
			      "manager": "Jeffery Bradshaw",
			      "status": 0
			    },
			    {
			      "shortname": "cgroth",
			      "username": "Christian Groth",
			      "email": "cgroth@militarycars.com",
			      "manager": "Jeffery Bradshaw",
			      "status": 3
			    },
			    {
			      "shortname": "awyman",
			      "username": "Andrew Wyman",
			      "email": "awyman@militarycars.com",
			      "manager": "Jeffery Bradshaw",
			      "status": 0
			    }
			  ]
			}


var testTwo = {
		  "manager": {
			    "shortname": "jgoza",
			    "username": "James Goza",
			    "email": "jgoza@militarycars.com",
			    "manager": "Robert Hagan",
			    "status": 1,
			    "problems": {
			      "finance": 0,
			      "vehicle": 4,
			      "customer": 6,
			      "order": 2
			    }
			  },
			  "team": [
			    {
			      "shortname": "ddellafo",
			      "username": "Donald Dellafosse",
			      "email": "ddellafo@militarycars.com",
			      "manager": "James Goza",
			      "status": 2,
			      "problems": {
			        "finance": 6,
			        "vehicle": 5,
			        "customer": 6,
			        "order": 1
			      }
			    },
			    {
			      "shortname": "cfede",
			      "username": "Christian Fede",
			      "email": "cfede@militarycars.com",
			      "manager": "James Goza",
			      "status": 2,
			      "problems": {
			        "finance": 6,
			        "vehicle": 2,
			        "customer": 2,
			        "order": 5
			      }
			    },
			    {
			      "shortname": "dfowler",
			      "username": "Des Fowler",
			      "email": "dfowler@militarycars.com",
			      "manager": "James Goza",
			      "status": 2,
			      "problems": {
			        "finance": 5,
			        "vehicle": 4,
			        "customer": 1,
			        "order": 5
			      }
			    },
			    {
			      "shortname": "ESchwartz",
			      "username": "Englebert Schwartz",
			      "email": "ESchwart@militarycars.com",
			      "manager": "James Goza",
			      "status": 2,
			      "problems": {
			        "finance": 2,
			        "vehicle": 2,
			        "customer": 6,
			        "order": 6
			      }
			    },
			    {
			      "shortname": "jham",
			      "username": "John Ham",
			      "email": "jham@militarycars.com",
			      "manager": "James Goza",
			      "status": 1,
			      "problems": {
			        "finance": 2,
			        "vehicle": 0,
			        "customer": 5,
			        "order": 3
			      }
			    },
			    {
			      "shortname": "jtorres",
			      "username": "Jose Torres-Luna",
			      "email": "jtorres@militarycars.com",
			      "manager": "James Goza",
			      "status": 1,
			      "problems": {
			        "finance": 3,
			        "vehicle": 2,
			        "customer": 3,
			        "order": 5
			      }
			    },
			    {
			      "shortname": "maurelus",
			      "username": "Maurice Aurelus",
			      "email": "maurelus@militarycars.com",
			      "manager": "James Goza",
			      "status": 1,
			      "problems": {
			        "finance": 2,
			        "vehicle": 6,
			        "customer": 1,
			        "order": 0
			      }
			    },
			    {
			      "shortname": "msauers",
			      "username": "Michael Sauers",
			      "email": "msauers@militarycars.com",
			      "manager": "James Goza",
			      "status": 1,
			      "problems": {
			        "finance": 2,
			        "vehicle": 5,
			        "customer": 1,
			        "order": 3
			      }
			    },
			    {
			      "shortname": "WTuttle",
			      "username": "William Tuttle",
			      "email": "WTuttle@militarycars.com",
			      "manager": "James Goza",
			      "status": 2,
			      "problems": {
			        "finance": 4,
			        "vehicle": 4,
			        "customer": 2,
			        "order": 6
			      }
			    },
			    {
			      "shortname": "jcrowthe",
			      "username": "Jayce Crowther",
			      "email": "jcrowthe@militarycars.com",
			      "manager": "James Goza",
			      "status": 1,
			      "problems": {
			        "finance": 3,
			        "vehicle": 4,
			        "customer": 2,
			        "order": 1
			      }
			    }
			  ]
			};