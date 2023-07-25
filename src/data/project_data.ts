type Project = {
    name: string;
    desc: string;
    url: string;
    imagePath: string;
}

const projects: Project[] = [
    {
        "name": "Tasks",
        "desc":
            "Tasks is an easy to use todo-cum-calendar android app that focuses on providing many functionalities while maintaining a simple and beautiful user-interface. Use it to add daily tasks with reminders, calendar view, voice notes, and cloud backup functionality.",
        "url": "https://github.com/HeckCodes/tasks-public",
        "imagePath": "tasks.png",
    },
    {
        "name": "NetChat",
        "desc":
            "NetChat; A simple messaging app built with Flutter for Android OS, which connects you with your family & friends while providing simple, clean yet attractive UI.",
        "url": "https://github.com/HeckCodes/NetChat-public",
        "imagePath": "netchat.png",
    },
    {
        "name": "Animephilic",
        "desc":
            "Animephilic is a Flutter app that enhances your experience with MyAnimeList, the popular online database for anime and manga. With this app, you can seamlessly browse and manage your anime and manga lists, explore new titles, and discover exciting recommendations.",
        "url": "https://github.com/HeckCodes/animephilic",
        "imagePath": "animephilic.png",
    },
    {
        "name": "2048",
        "desc":
            "The classic 2048 game made with Flutter to test your thinking skills. Here you have an aim to create a block with value 2048 or bigger.",
        "url": "https://github.com/HeckCodes/game2048",
        "imagePath": "rubik.png",
    },
    {
        "name": "Snake",
        "desc":
            "Some games never die do they? Here is the classic snake game made with flutter for android OS. Enjoy :)",
        "url": "https://github.com/HeckCodes/snake",
        "imagePath": "snake.png",
    }
];

export default projects;