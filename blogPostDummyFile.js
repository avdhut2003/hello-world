formContext.getControl("header_vrp_plannedcheckoutdate")
          .setNotification("Your entered date is invalid - header notification"
                            , "pcd_notificationid_hdr");
formContext.getControl("vrp_plannedcheckoutdate")
      .setNotification("Your entered date is invalid"
                            , "pcd_notificationid");
