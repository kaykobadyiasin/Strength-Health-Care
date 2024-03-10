

const SectionTitle = ({ section, title }) => {
    return (
        <div>
            <h5 className="text-lg text-primary-100">{section}</h5>
            <h2 className="lg:text-4xl text-2xl montserrat-alternates-bold my-3 text-secondary-100 leading-tight">{title}</h2>
        </div>
    );
};

export default SectionTitle;