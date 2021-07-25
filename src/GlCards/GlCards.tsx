/* eslint-disable @typescript-eslint/no-namespace */
import { memo } from "react";
import type { ReactNode } from "react";
import { Text } from "../theme";
import { makeStyles } from "../theme";

export type GlCardsProps = {
    className?: string;
    title?: string;
    children?: ReactNode;
};

const useStyles = makeStyles()(theme => ({
    "title": {
        "textAlign": "center",
        ...(() => {
            const value = theme.spacing(5);
            return {
                "marginTop": value,
                "marginBottom": value,
            };
        })(),
        ...(theme.responsive.down("lg")
            ? {
                  "fontSize": "22px",
                  "lineHeight": "24px",
              }
            : {}),
    },

    "cards": {
        "display": "flex",
        "flexWrap": "wrap",
        "& > *": {
            "flex": `1 1 30%`,
            ...(theme.responsive.down(1400)
                ? {
                      "flex": "1 1 40%",
                  }
                : {}),
            ...(theme.responsive.down(686)
                ? {
                      "flex": "1 1 100%",
                  }
                : {}),
        },
    },
}));

export const GlCards = memo((props: GlCardsProps) => {
    const { title, children, className } = props;

    const { classes } = useStyles();

    return (
        <section className={className}>
            {title && (
                <Text className={classes.title} typo="page heading">
                    {title}
                </Text>
            )}
            <div className={classes.cards}>{children}</div>
        </section>
    );
});
