import { ArrowDownRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Hero1 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left ml-3">
            
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Welcome to Smoke & Mirros
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Congrats you made it to the best team!
            </p>
           
          </div>
          <img
            src="/SmokeNMirros.png"
            alt="placeholder hero"
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero1;
