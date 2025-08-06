import navaid from '../assets/navaid-sir.png';
import haroon from '../assets/haroon-sir.jpeg';
import founder from "../assets/founder.jpg";
import mayank from "../assets/mayank.jpeg";

const people = [
  {
    name: 'Mayank Arora',
    role: 'Founder, SoarX',
    imageUrl: mayank,
    linkedin: 'https://www.linkedin.com/in/arora1mayank/'
  },
  {
    name: 'Dr. Navaid Z. Rizvi',
    role: 'Faculty Mentor',
    imageUrl: navaid,
    linkedin: 'https://www.linkedin.com/in/navaid-z-rizvi-ph-d-b46bb2b0/'
  },
  {
    name: 'Ali Nasir',
    role: 'Founder & President, SoarX JMI',
    imageUrl: founder,
    linkedin: 'https://www.linkedin.com/in/ali-nasir-ba3640230/'
  },
  {
    name: 'Dr. Mohammad Haroon Anwar',
    role: 'Faculty Mentor',
    imageUrl: haroon,
    linkedin: 'https://www.linkedin.com/in/mohammad-haroon-anwar/'
  }
]

export default function Mentors() {
  return (
    <>
      {/* Container for demo purpose */}
      <div className="container my-8 mx-auto px-4 sm:px-6 md:px-6">
        <section className="mb-16 text-center text-white fade-in">
          <h2 className="mb-10 text-2xl sm:text-3xl font-bold font-sans">For a better change...</h2>
          <div className="grid gap-y-8 gap-x-4 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
            {people.map((item)=>(
              <div key={item.name} className="mb-8 sm:mb-12 md:mb-0 hover-glow transition-all duration-300 px-4 sm:px-0">
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <img
                    src={item.imageUrl}
                    className="w-24 sm:w-32 rounded-full shadow-lg dark:shadow-black/20 object-cover"
                  />
                </div>
                <h5 className="mb-1 sm:mb-2 text-base sm:text-lg font-bold font-sans break-words"><a href={item.linkedin}>{item.name}</a></h5>
                <h6 className="mb-2 sm:mb-4 font-medium text-primary dark:text-primary-400 font-sans text-xs sm:text-base">
                  {item.role}
                </h6>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* Container for demo purpose */}
    </>

  )
}
