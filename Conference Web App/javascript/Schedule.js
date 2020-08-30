$(document).ready(function () {
    var appointments = new Array();


    var appointment1 = {
        id: "id1",
        description: "Empathy and vulnerability aren't necessarily two words associated with professional success, but they're invaluable to achieving long-term goals leaders set for their companies. Lets both define what those look like at work and how to engage them for optimized collaboration.",
        location: "Duke of York's Picturehouse",
        subject: "Sharon Steed - Engaging Empathy.",
        calendar: "Duke of York's Picturehouse",
        start: new Date(2020, 10, 5, 9, 50, 0),
        end: new Date(2020, 10, 5, 10, 20, 0)
    }

    var appointment2 = {
        id: "id2",
        description: "Amina shares her story about what it takes to become a developer after teaching herself how to code, juggling a full-time job and baby.",
        location: "Duke of York's Picturehouse",
        subject: "Amina Adewusi - What does it take to become a developer in 2020?",
        calendar: "Duke of York's Picturehouse",
        start: new Date(2020, 10, 5, 10, 30, 0),
        end: new Date(2020, 10, 5, 11, 0, 0)
    }

    var appointment3 = {
        id: "id3",
        description: "Coffee Break",
        location: "Duke of York's Picturehouse",
        subject: "Coffee Break",
        calendar: "Break",
        start: new Date(2020, 10, 5, 11, 0, 0),
        end: new Date(2020, 10, 5, 11, 30, 0)
    }

    var appointment4 = {
        id: "id4",
        description: "Git is like a Swiss Army Knife for telling the story of your project. Yet most of us are only using the big knife and maybe the scissors to fudge our code into version control. In this talk we're going to learn about some more advanced Git commands and some history too.",
        location: "Duke of York's Picturehouse",
        subject: "Alice Bartlett - Getting More From Git",
        calendar: "Duke of York's Picturehouse",
        start: new Date(2020, 10, 5, 11, 30, 0),
        end: new Date(2020, 10, 5, 12, 0, 0)
    }

    var appointment5 = {
        id: "id5",
        description: "The web, and big tech at large, is tracking our every move, habits, and facial expression. As developers who are also users, we both contribute to the surveillance system and are exploited by it. But it doesn’t have to be this way.",
        location: "Duke of York's Picturehouse",
        subject: "Laura Kalbag - Unbelievable Things You Never Knew About Tracking",
        calendar: "Duke of York's Picturehouse",
        start: new Date(2020, 10, 5, 12, 0, 0),
        end: new Date(2020, 10, 5, 12, 30, 0)
    }
    var appointment6 = {
        id: "id6",
        description: "Lunch Break",
        location: "",
        subject: "Lunch Break",
        calendar: "Break",
        start: new Date(2020, 10, 5, 12, 30, 0),
        end: new Date(2020, 10, 5, 14, 0, 0)
    }
    var appointment7 = {
        id: "id7",
        description: "We all know performance is big business, but how big? Let's take a look at some of the numbers powering the web performance industry, from both sides of the table. What do performance improvements mean for my clients, and how do we translate that into a working relationship",
        location: "Duke of York's Picturehouse",
        subject: "Harry Roberts - From Milliseconds to Millions: A Look at the Numbers Powering Web Performance ",
        calendar: "Duke of York's Picturehouse",
        start: new Date(2020, 10, 5, 14, 0, 0),
        end: new Date(2020, 10, 5, 14, 30, 0)
    }
    var appointment8 = {
        id: "id8",
        description: "During the session, we will talk about the causes of painful performance and look into simple and actionable steps how to make a website more performant with a little effort.",
        location: "Duke of York's Picturehouse",
        subject: "Anna Migas - Effortless Performance Debugging",
        calendar: "Duke of York's Picturehouse",
        start: new Date(2020, 10, 5, 14, 30, 0),
        end: new Date(2020, 10, 5, 15, 0, 0)
    }
    var appointment9 = {
        id: "id9",
        description: "Ice Cream Break",
        location: "",
        subject: "Ice Cream Break",
        calendar: "Break",
        start: new Date(2020, 10, 5, 15, 0, 0),
        end: new Date(2020, 10, 5, 16, 0, 0)
    }
    var appointment10 = {
        id: "id10",
        description: "The rise of generative art has brought a whole new wave of creativity to the web; this talk is about the myriad of ways we can use all that coding knowledge to make cool art in the physical realm.",
        location: "Duke of York's Picturehouse",
        subject: "Charlotte Dann - Taking The Web Off The Screen",
        calendar: "Duke of York's Picturehouse",
        start: new Date(2020, 10, 5, 16, 0, 0),
        end: new Date(2020, 10, 5, 16, 30, 0)
    }
    var appointment11 = {
        id: "id11",
        description: "Computers and other electronic devices existed for a long time before the web made its debut. Can modern web interfaces help invigorate the small computing space, while driving a new set of creative developers to invent better and more playful experiences?",
        location: "Duke of York's Picturehouse",
        subject: "Suz Hinton - Adventures in Reinventing Interfaces",
        calendar: "Duke of York's Picturehouse",
        start: new Date(2020, 10, 5, 16, 30, 0),
        end: new Date(2020, 10, 5, 17, 0, 0)
    }
    var appointment12 = {
        id: "id12",
        description: "Closing Remarks",
        location: "Duke of York's Picturehouse",
        subject: "Closing Remarks",
        calendar: "Duke of York's Picturehouse",
        start: new Date(2020, 10, 5, 17, 0, 0),
        end: new Date(2020, 10, 5, 17, 15, 0)
    }
    var appointment13 = {
        id: "id13",
        description: "This workshop will be run by Future Friends co-creator Remy Sharp and will look at Modern Universal React dev with Next.js\n" +
            "\n" +
            "You will be expected to be comfortable with JavaScript, and be familiar with, or at least comfortable with the JSX concepts (putting XML inside your JavaScript). We'll also be using Node 8 as we'll make use of async/await. ",
        location: "Lighthouse",
        subject: "Future Friends Workshop",
        calendar: "Lighthouse",
        start: new Date(2020, 10, 6, 9, 0, 0),
        end: new Date(2020, 10, 6, 18, 0, 0)
    }
    var appointment14 = {
        id: "id14",
        description: "Early morning networking",
        location: "Moe's at the circus",
        subject: "Early morning networking",
        calendar: "Moe's at the circus",
        start: new Date(2020, 10, 7, 7, 30, 0),
        end: new Date(2020, 10, 7, 11, 0, 0)
    }
    var appointment15 = {
        id: "id15",
        description: "lunch with future friends",
        location: "Alcampo Lounge",
        subject: "lunch with future friends",
        calendar: "Alcampo Lounge",
        start: new Date(2020, 10, 7, 12, 0, 0),
        end: new Date(2020, 10, 7, 16, 30, 0)
    }
    var appointment16 = {
        id: "id16",
        description: "17:15-LATE. Order some food (until 9PM), join in our board games and enjoy a drink on us (wide range of non-alcoholic and hot drinks also available). @ Ohso Social.",
        location: "Ohso Social Beach Bar & Restaurant ",
        subject: "Last Night Party",
        calendar: "Ohso Social Bar",
        start: new Date(2020, 10, 7, 17, 15, 0),
        end: new Date(2020, 10, 7, 23, 59, 0)
    }

    appointments.push(appointment1);
    appointments.push(appointment2);
    appointments.push(appointment3);
    appointments.push(appointment4);
    appointments.push(appointment5);
    appointments.push(appointment6);
    appointments.push(appointment7);
    appointments.push(appointment8);
    appointments.push(appointment9);
    appointments.push(appointment10);
    appointments.push(appointment11);
    appointments.push(appointment12);
    appointments.push(appointment13);
    appointments.push(appointment14);
    appointments.push(appointment15);
    appointments.push(appointment16);



// prepare the data
    var source =
        {
            dataType: "array",
            dataFields: [
                { name: 'id', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'location', type: 'string' },
                { name: 'subject', type: 'string' },
                { name: 'calendar', type: 'string' },
                { name: 'start', type: 'date' },
                { name: 'end', type: 'date' }
            ],
            id: 'id',
            localData: appointments
        };
    var adapter = new $.jqx.dataAdapter(source);
    $("#scheduler").jqxScheduler({
        date: new $.jqx.date(2020, 10, 5),
        width: 850,
        height: 600,
        source: adapter,
        view: 'dayView',
        showLegend: true,
        ready: function () {
            $("#scheduler").jqxScheduler('ensureAppointmentVisible', 'id1');
        },
        resources:
            {
                colorScheme: "scheme05",
                dataField: "calendar",
                source:  new $.jqx.dataAdapter(source)
            },
        appointmentDataFields:
            {
                from: "start",
                to: "end",
                id: "id",
                description: "description",
                location: "place",
                subject: "subject",
                resourceId: "calendar"
            },
        views:
            [
                'dayView',
                'weekView',
                'monthView'
            ]
    });
});