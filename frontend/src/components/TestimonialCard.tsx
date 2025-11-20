interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
}

const TestimonialCard = ({ quote, name, location }: TestimonialCardProps) => (
  <div className="card testimonial-card">
    <p className="quote">“{quote}”</p>
    <p className="author">{name}</p>
    <p className="location">{location}</p>
  </div>
);

export default TestimonialCard;
