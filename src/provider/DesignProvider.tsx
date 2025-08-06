export default function DesignProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden h-full text-default bg-white">
      {children}
    </div>
  );
}
