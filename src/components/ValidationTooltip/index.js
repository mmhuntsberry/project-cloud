import React from "react";
import { Tooltip } from "carbon-components-react";

export const ValidationTooltip = ({
  constraints,
  direction = "bottom",
  open = true
}) => {
  return (
    <div className="password__tooltip">
      <Tooltip
        className="tooltip"
        direction={direction}
        open={open}
        tabIndex={0}
        showIcon={false}
        focusTrap={false}
        onChange={() => {}}
      >
        {constraints &&
          constraints.map(
            ({
              id,
              constraint,
              text,
              className,
              successIcon: Success,
              errorIcon: Error
            }) => {
              return (
                <div className="password__requirement-container" key={id}>
                  {constraint === true || constraint === undefined ? (
                    <>
                      <Success
                        className={
                          constraint === undefined ? "" : className.success
                        }
                      />
                      <p>{text}</p>
                    </>
                  ) : (
                    <>
                      <Error
                        className={
                          constraint === undefined ? "" : className.error
                        }
                      />
                      <p>{text}</p>
                    </>
                  )}
                </div>
              );
            }
          )}
      </Tooltip>
    </div>
  );
};
