import { Typography, Card, CardBody } from "@material-tailwind/react";
import AI_using_chatgpt from "../assets/AI_using_ChatGPT.jpg";
import API101 from "../assets/API101.png";
import Microsoft_AI from "../assets/Microsoft_AI.png";

function ContentCard({ img, title, desc }) {
    return (
        <Card
            className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl hover-glow transition-all duration-300"
            color="transparent"
        >
            <img
                src={img}
                alt="bg"
                className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70" />
            <CardBody className="relative flex flex-col justify-end">
                <Typography variant="h4" color="white" className="font-sans">
                    {title}
                </Typography>
                <Typography
                    variant="paragraph"
                    color="white"
                    className="my-2 font-normal font-sans"
                >
                    {desc}
                </Typography>
            </CardBody>
        </Card>
    );
}

const contents = [
    {
        img: "https://images.unsplash.com/photo-1638029202288-451a89e0d55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Hackathons",
        desc: "SoarX JMI organizes hackathons, fostering innovation and collaboration among students, offering a platform for creative problem-solving in tech.",
    },
    {
        img: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Quizes",
        desc: "SoarX JMI hosts coding quizzes, promoting skill development and competitiveness among participants, encouraging excellence in programming proficiency.",
    },
    {
        img: "https://www.commercialdesignindia.com/cloud/2021/11/26/6LXdgdaz-Microsoft-Building-2.jpg",
        title: "Microsoft Office Visit",
        desc: "SoarX arranged a memorable office visit to Microsoft, offering students an exclusive peek into the company's culture and operations.",
    },
    {
        img: AI_using_chatgpt,
        title: "AI using ChatGPT",
        desc: " In collaboration with Coding Blocks, SoarX JMI presented its first AI workshop focused on ChatGPT. This workshop aimed to provide participants with a foundational understanding of artificial intelligence, covering essential concepts and real-world applications.",
    },
    {
        img: API101,
        title: "API 101",
        desc: "This introductory session on APIs, led by Mr. Krishanu Bujarbaruah, emphasized the significance of APIs in modern software development. Covering foundational concepts such as API functionality and the importance of hands-on learning, the workshop provided students with practical insights into this essential technology. ",
    },
    {
        img: Microsoft_AI,
        title: "Microsoft AI",
        desc: "The Microsoft Visit on May 18 showcased Microsoft’s latest AI advancements, featuring industry leaders and developers. Speakers discussed new AI tools, ethical AI development, and real-world applications, highlighting how AI is boosting productivity and innovation across various fields.",
    },
];

export default function PastEvents() {
    return (
        <>
        <section className="container mx-auto px-8 py-5 lg:py-10 bg-gray-950 fade-in">
            <Typography
                variant="h2"
                color="white"
                className="!text-2xl !leading-snug lg:!text-3xl text-center font-sans"
            >
                Past Events
            </Typography>
            <Typography
                variant="lead"
                className="mt-10 max-w !font-normal !text-white text-center font-sans"
            >
                SoarX JMI consistently organizes impactful events featuring speakers from major companies like Amazon, Microsoft, Meta, and Google. These collaborations offer students practical experience with the latest tech. For instance, our Lensathon with Snapchat taught lens creation, rewarding participants with items like t-shirts and headphones. Similarly, our recent AI Odyssey with Microsoft provided exclusive merchandise such as t-shirts and trendy fanny packs to participants.
            </Typography>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
                {contents.map(({ img, title, desc }) => (
                    <ContentCard key={title} img={img} title={title} desc={desc} />
                ))}
            </div>
        </section>
        </>
    );
}