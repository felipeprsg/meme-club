import { useState, useEffect } from 'react';

import type { GetServerSidePropsContext } from 'next';

import nookies from 'nookies';

type Cookies = Record<string, string>;

type SetCookieOptions = {
  maxAge?: number;
  domain?: string;
  path?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
};

const useCookies = () => {
  const [cookies, setCookiesState] = useState<Cookies>({});

  useEffect(() => {
    setCookiesState(nookies.get());
  }, []);

  const setCookie = (
    name: string,
    value: string,
    options?: SetCookieOptions
  ): void => {
    setCookiesState((prev) => ({ ...prev, [name]: value }));
    nookies.set(undefined, name, value, options);
  };

  const getCookie = (name: string): string => {
    return cookies[name];
  };

  const removeCookie = (name: string, options?: SetCookieOptions): void => {
    setCookiesState((prev) => {
      const { [name]: _, ...rest } = prev;
      return rest;
    });

    nookies.destroy(undefined, name, options);
  };

  return {
    cookies,
    setCookie,
    getCookie,
    removeCookie,
  };
};

const getServerSideCookies = (ctx: GetServerSidePropsContext): Cookies => {
  return nookies.get(ctx);
};

export { useCookies, getServerSideCookies };
