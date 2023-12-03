import '../index.css'

export default function ProductCardSkeleton() {
  return (
    <div id="skeleton" className="skeleton w-36 h-60 md:w-52 md:h-80 flex flex-col justify-between bg-gray-200 rounded">
      <div className="h-full">
        <div className="w-full h-3/4 bg-gray-300" />
        <p className="m-2 h-4 w-3/4 bg-gray-300 rounded"></p>
      </div>
      <div className="p-2 flex justify-between">
        <span className="flex items-end gap-1">
          <p className="h-2 w-8 bg-gray-300 rounded"></p>
          <p className="h-2 w-8 bg-gray-300 rounded"></p>
        </span>
        <p className="h-2 w-8 bg-gray-300 rounded"></p>
      </div>
    </div>
  );
}
