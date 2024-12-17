export interface Update {
    date: string;
    title: string;
    content: string;
    link?: string | null;
}

export const updates: Update[] = [
    {
        date: "2024-12-17",
        title: "Code: The GitHub static site is up",
        content: "The base template was created in 10 minutes using https://bolt.new/ including subsites, layout and GitHub deployment pipelines. Adding relevant content and making small adjustments took another hour.",
        link: "https://github.com/ngs90/ngs90.github.io"
    },
    {
        date: "2024-12-13",
        title: "Article: Databricks free trial learnings",
        content: "My initial learnings about how to minimize costs using the Databricks free trial on AWS.",
        link: "https://medium.com/@nicolaj.schmit/databricks-aws-free-trial-learnings-6268d67fca65"
    },
    {
        date: "2024-12-13",
        title: "Video: First YouTube content up",
        content: "First YouTube tutorial video is out! 😄 I'm still practicing how to make captivating and educational videos. But have a look at how to get started with Databricks on AWS using their free trials.",
        link: "https://www.youtube.com/watch?v=k4JZflQ4zYM"
    }
];