import React from 'react';
import Link from 'next/link';

export default function Filmdle() {
  return (
    <div>
      <h1>Filmdle</h1>
      <p>A Wordle-inspired movie guessing game.</p>
      <Link href="/"><a>Go back</a></Link>
    </div>
  );
}

