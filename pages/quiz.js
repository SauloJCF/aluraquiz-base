import React from 'react';
import { useRouter } from 'next/router';

export default function QuizPage() {
  const router = useRouter();
  const { query: { name } } = router;
  return (
    <div>
      Página de quiz
      {` ${name}`}
    </div>
  );
}
