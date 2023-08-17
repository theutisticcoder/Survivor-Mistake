{ pkgs }: {
  deps = [
		pkgs.nodePackages.prettier
    pkgs.nodejs-16_x
    pkgs.wget
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}