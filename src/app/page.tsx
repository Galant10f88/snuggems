import DogCard from "@/components/DogCard";
import { dogs } from "@/dogs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          In Loving Memory
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dogs.map((dog) => (
            <DogCard key={dog.name} dog={dog} />
          ))}
        </div>
      </div>
    </main>
  );
}
