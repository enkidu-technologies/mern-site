import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Background Decoration */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              Professional Digital Solutions
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              We Build Digital
              <span className="block text-blue-400">
                Experiences That Matter.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We provide professional digital solutions that help businesses
              build a stronger online presence, improve customer experiences,
              and grow with confidence.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-lg bg-blue-600 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Get Started
              </Link>

              <Link
                to="/services"
                className="rounded-lg border border-slate-700 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Helping businesses move forward with technology.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-600">
                We combine technology, creativity, and strategic thinking to
                deliver solutions that are practical, scalable, and designed
                around real business needs.
              </p>

              <Link
                to="/about"
                className="mt-6 inline-flex font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Learn More
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Solutions designed for your business.
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              From websites to custom digital solutions, we help businesses
              establish and strengthen their digital presence.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Service 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                &lt;/&gt;
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Web Development
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Modern, responsive, and high-performance websites.
              </p>
            </div>

            {/* Service 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                ◈
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Software Solutions
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Custom software built around your business requirements.
              </p>
            </div>

            {/* Service 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                ✦
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                UI/UX Design
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Clean and intuitive experiences for your customers.
              </p>
            </div>

            {/* Service 4 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                ↗
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Digital Solutions
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Technology solutions that support long-term growth.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-600 hover:text-blue-600"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to bring your idea to life?
              </h2>

              <p className="mt-4 text-lg text-blue-100">
                Let's discuss your requirements and find the right solution for
                your business.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Contact Us
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
