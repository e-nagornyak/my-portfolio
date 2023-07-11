import {JSXElementConstructor, PropsWithChildren} from "react";

type Provider = JSXElementConstructor<PropsWithChildren<any>>;

export const composeProviders = (providers: Provider[]) =>
    providers.reduce((Prev, Curr) => ({children}) => (
        <Prev>
            <Curr>{children}</Curr>
        </Prev>
    ));
