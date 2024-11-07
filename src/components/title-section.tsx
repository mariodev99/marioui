export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="">
      <h3 className="text-xl md:text-3xl font-medium">{title}</h3>
    </div>
  );
}
