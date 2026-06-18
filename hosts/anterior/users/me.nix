{ self, ... }: {
  imports = [ self.homeModules.common ];
  programs = {
    awscli = {
      enable = true;
      settings =
        let
          session = "sso";
        in
        {
          "sso-session ${session}" = {
            sso_start_url = "https://identitycenter.amazonaws.com/ssoins-72233c6842aa3089";
            sso_region = "us-east-1";
            sso_registration_scopes = "sso:account:access";
          };
          "profile default" = {
            sso_session = session;
            sso_account_id = "038462749198";
            sso_role_name = "UseSopsKey";
          };
        };
    };
  };
}
