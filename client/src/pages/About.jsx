import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Learn more about our company, our mission, and the values that drive us."
      />

      {/* Who We Are */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Building meaningful digital experiences for modern businesses.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We are a professional technology company focused on
                delivering reliable, scalable, and modern digital
                solutions for businesses of all sizes.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Our approach combines technology, creativity, and
                business understanding to create solutions that are
                not only visually appealing but also practical,
                easy to use, and built for long-term growth.
              </p>
            </div>

            {/* Visual Card */}
            <div className="relative">
              <div className="rounded-3xl bg-slate-950 p-8 shadow-xl sm:p-10">
                <div className="grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-white/10 p-6">
                    <p className="text-3xl font-bold text-white">
                      100%
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      Commitment
                    </p>
                  </div>

                  <div className="rounded-2xl bg-blue-600 p-6">
                    <p className="text-3xl font-bold text-white">
                      24/7
                    </p>
                    <p className="mt-2 text-sm text-blue-100">
                      Support
                    </p>
                  </div>

                  <div className="col-span-2 rounded-2xl border border-white/10 p-6">
                    <p className="text-lg font-semibold text-white">
                      Technology with purpose.
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      We focus on creating solutions that solve
                      real business problems and create measurable
                      value.
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Purpose
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What drives us
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* Mission */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                ◎
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Our mission is to make technology accessible,
                practical, and valuable for businesses by
                delivering solutions that solve real-world
                challenges.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                ◇
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                We aim to become a trusted technology partner
                for businesses by continuously improving,
                innovating, and creating better digital
                experiences.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Values
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Principles behind our work.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Quality",
                description:
                  "We believe in delivering work that meets high standards.",
              },
              {
                title: "Innovation",
                description:
                  "We continuously explore better ways to solve problems.",
              },
              {
                title: "Integrity",
                description:
                  "We build relationships through transparency and trust.",
              },
              {
                title: "Growth",
                description:
                  "We create solutions that support long-term business growth.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Let's build something great together.
              </h2>

              <p className="mt-4 text-blue-100">
                Have a project or idea in mind? We'd love to hear
                about it.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Talk to Us
              <span className="ml-2">→</span>
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}

export default About;