import { useParams, usePathname } from 'next/navigation';

import { useLocation } from './useLocation';

interface NavigateOptions {
  location?: string;
  matchParam?: string;
}

/**
 * Hook for matching the current location against a list of routes and optional parameters.
 * @param routes - An array of route patterns to match against.
 * @param options - Configuration options for navigation behavior.
 * @returns An object containing boolean flags indicating parameter and pathname matches.
 */
export function useMatch(
  routes: string[],
  { location = undefined, matchParam = undefined }: NavigateOptions = {}
): {
  paramMatch: boolean;
  pathnameMatch: boolean;
} {
  const { pathname } = useLocation();

  const locationMatch = location ?? pathname;

  const pathnameMatch = !!routes.find(route => {
    const regex = new RegExp(`^${route.replace(/:[^\s/]+/g, '([^/]+)')}$`);
    return regex.test(locationMatch);
  });

  const paramMatch = matchParam
    ? locationMatch.includes(`?${matchParam}`) || locationMatch.includes(`&${matchParam}`)
    : false;

  return {
    paramMatch,
    pathnameMatch,
  };
}

export function matchRoutesFunc(
  routes: string[],
  { location = undefined }: NavigateOptions = {}
): boolean {
  const pathname = window.location.pathname;

  const locationMatch = location ?? pathname;

  const pathnameMatch = !!routes.find(route => {
    const regex = new RegExp(`^${route.replace(/:[^\s/]+/g, '([^/]+)')}$`);
    return regex.test(locationMatch);
  });

  return pathnameMatch;
}

export const useMatchPathname = (routes: string[]) => {
  const pathname = usePathname();

  const pathnameMatch = !!routes.find(route => {
    const regex = new RegExp(`^${route.replace(/:[^\s/]+/g, '([^/]+)')}$`);
    return regex.test(pathname);
  });
  return pathnameMatch;
};
