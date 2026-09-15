import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Modern, responsive, fast, and scalable websites designed to provide an excellent experience across devices.",
      features: [
        "Business Websites",
        "Corporate Websites",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
    {
      number: "02",
      title: "Software Development",
      description:
        "Custom software solutions designed around your unique business processes, requirements, and goals.",
      features: [
        "Custom Applications",
        "Business Software",
        "Database Solutions",
        "API Development",
      ],
    },
    {
      number: "03",
      title: "UI/UX Design",
      description:
        "Clean, intuitive, and user-focused interfaces that make digital products easier and more enjoyable to use.",
      features: [
        "Website UI Design",
        "Application Design",
        "User Experience",
        "Design Systems",
      ],
    },
    {
      number: "04",
      title: "Digital Solutions",
      description:
        "Technology-driven solutions that help businesses improve efficiency, productivity, and their digital presence.",
      features: [
        "Digital Transformation",
        "Business Automation",
        "Technology Consulting",
        "Custom Solutions",
      ],
    },
  ];

  return (
    <>
      <PageHeader
        title="Our Services"
        description="Explore our professional services designed to help your business grow."
      />

      {/* Introduction */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                What We Do
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Technology solutions built around your goals.
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-600">
              From websites and software to user experience and
              digital solutions, we help businesses use technology
              more effectively.
            </p>

          </div>

          {/* Services Grid */}
          <div className="mt-14 grid gap-6 lg:grid-cols-2">

            {services.map((service) => (
              <div
                key={service.number}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >

                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold text-blue-600">
                    {service.number}
                  </span>

                  <span className="text-2xl text-slate-300 transition group-hover:text-blue-600">
                    ↗
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <span className="text-blue-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Simple process. Clear communication.
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              We follow a straightforward process to turn your
              requirements into a successful digital solution.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            {[
              {
                number: "01",
                title: "Discover",
                text: "We understand your requirements, goals, and challenges.",
              },
              {
                number: "02",
                title: "Plan",
                text: "We define the right strategy, structure, and technology.",
              },
              {
                number: "03",
                title: "Build",
                text: "Our team develops and refines the solution.",
              },
              {
                number: "04",
                title: "Launch",
                text: "We deliver the final solution and help you move forward.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="text-sm font-bold text-blue-600">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Tell us what you're looking to build and let's
              discuss how we can help.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Start a Conversation
              <span className="ml-2">→</span>
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}

export default Services;