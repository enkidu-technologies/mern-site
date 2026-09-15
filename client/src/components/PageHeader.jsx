function PageHeader({ title, description }) {
  return (
    <section className="bg-slate-950 px-6 py-20 text-center text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

export default PageHeader;