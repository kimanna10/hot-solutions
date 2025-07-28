export default function FullPageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-white rounded-full border-t-secondary animate-spin"></div>
    </div>
  );
}
