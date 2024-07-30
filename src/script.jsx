import React, { useEffect } from "react";
import $ from "jquery";

const JqueryScript = () => {
  useEffect(() => {
    $("#second-nav-tab").click(function () {
      $("#second-nav-tab img").fadeIn(0);
      $("#one-nav-tab img").fadeOut(0);
      $("#second-tab-content").fadeIn(400);
      $("#one-tab-content").fadeOut(0);
    });

    $("#one-nav-tab").click(function () {
      $("#second-nav-tab img").fadeOut(0);
      $("#one-nav-tab img").fadeIn(0);
      $("#one-tab-content").fadeIn(400);
      $("#second-tab-content").fadeOut(0);
    });

    // Очистка обработчиков при размонтировании компонента
    return () => {
      $("#second-nav-tab").off("click");
      $("#one-nav-tab").off("click");
    };
  }, []);

  return null;
};

export default JqueryScript;
