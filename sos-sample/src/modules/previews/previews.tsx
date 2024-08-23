"use client";

import React from "react";
import { ArticlesSection } from "./articles/articles";
import { TodosSection } from "./todos/todos";

export const Previews = React.memo(() => {
  return (
    <main>
      <ArticlesSection />
      <TodosSection />
    </main>
  );
});
