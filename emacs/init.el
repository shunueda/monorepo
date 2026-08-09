;; -*- lexical-binding: t; -*-

(setq
  ;; keep-sorted start
  ;; Don't warn on advice
  ad-redefinition-action 'accept
  ;; Don't show the startup message
  auto-save-default nil
  completion-cycle-threshold t
  confirm-kill-emacs 'yes-or-no-p
  custom-file (concat user-emacs-directory "custom.el")
  ;; Revert Dired and other buffers
  global-auto-revert-non-file-buffers t
  indent-tabs-mode nil
  ;; Don't show the startup message
  inhibit-startup-message t
  ;; Don't warn on large files
  large-file-warning-threshold nil
  ;; Make super-save work nicely with Magit
  ;; https://github.com/bbatsov/super-save/issues/7#issuecomment-872380612
  magit-save-repository-buffers 'dontask
  ;; No backup files
  make-backup-files nil
  markdown-display-remote-images t
  markdown-enable-math t
  ;; Silence compiler warnings as they can be pretty disruptive
  native-comp-async-report-warnings-errors nil
  org-startup-with-inline-images t
  read-buffer-completion-ignore-case t
  read-file-name-completion-ignore-case t
  ;; Make it easy to cycle through previous items in the mark ring
  set-mark-command-repeat-pop t
  tab-always-indent 'complete
  tab-width 2
  treesit-font-lock-level 4
  use-dialog-box nil
  use-package-always-ensure nil
  ;; Follow symlinks to VC-controlled files without warning
  vc-follow-symlinks t
  visible-bell t
  ;; keep-sorted end
  )

;; Local custom file if possible
(when (file-exists-p custom-file)
  (load custom-file))

;; Enable pass for auth-source
(auth-source-pass-enable)

;; Causes Emacs to freeze
(global-unset-key [C-wheel-up])
(global-unset-key [C-wheel-down])

;; Reserved for Tmux
(global-unset-key [C-t])

;; Swap the Backspace and DEL
(define-key key-translation-map (kbd "C-h") (kbd "DEL"))

;; Core modes keep-sorted start
;; Save to original file
(auto-save-visited-mode 1)
;; Show column number on mode line
(column-number-mode 1)
;; Display time in mode line / tab bar
(display-time-mode 1)
;; Refresh buffers with changed local files
(global-auto-revert-mode 1)
;; Display line numbers
(global-display-line-numbers-mode t)
;; Visually wrap long lines in all buffers
(global-visual-line-mode 1)
;; Hide the menu bar
(menu-bar-mode 0)
;; Enable repeating key maps
(repeat-mode 1)
;; Save minibuffer history
(savehist-mode 1)
;; Hide the scroll bar
(scroll-bar-mode 0)
;; Remember previous tab window configurations
(tab-bar-history-mode 1)
;; Hide the tool bar
(tool-bar-mode 0)
;; Enable mouse events in terminal Emacs
(xterm-mouse-mode 1)
;; keep-sorted end

(defun ueda/irc-connect ()
  (interactive)
  (erc-tls
    :server "irc.libera.chat"
    :port 6697
    :nick "ueda"
    :password (auth-source-pass-get 'secret "InternetAccounts/libera")))

;; keep-sorted start block=yes
(use-package
  corfu
  :custom
  (corfu-auto t)
  (corfu-auto-prefix 1)
  (corfu-cycle t)
  (corfu-popupinfo-delay '(0.1 . 0.05))
  (corfu-popupinfo-max-height 20)
  (corfu-popupinfo-max-width 80)
  :init
  (global-corfu-mode)
  (corfu-popupinfo-mode 1))
(use-package kkp
  :unless (display-graphic-p)
  :custom
  (kkp-active-enhancements '(disambiguate-escape-codes report-alternate-keys))
  :hook (tty-setup . global-kkp-mode))
(use-package
  dimmer
  :ensure t
  :custom
  (dimmer-fraction 0.75)
  (dimmer-adjustment-mode :foreground)
  :config
  (dimmer-configure-magit)
  (dimmer-configure-org)
  (dimmer-mode t))
(use-package
  embark-consult
  :hook (embark-collect-mode . consult-preview-at-point-mode))
(use-package
  exec-path-from-shell
  :when (memq window-system '(mac ns x))
  :config
  ;; https://github.com/purcell/exec-path-from-shell/blob/6146fdc16e9882df270be7e58ae8d628032d6bc4/README.md#usage
  (dolist
    (var
      '
      ("SSH_AUTH_SOCK"
        "SSH_AGENT_PID"
        "GPG_AGENT_INFO"
        "LANG"
        "LC_CTYPE"
        "NIX_SSL_CERT_FILE"
        "NIX_PATH"))
    (add-to-list 'exec-path-from-shell-variables var))
  (exec-path-from-shell-initialize))
(use-package
  gptel
  :config
  (setq
    gptel-backend
    (gptel-make-openai
      "OpenRouter"
      :host "openrouter.ai"
      :endpoint "/api/v1/chat/completions"
      :stream t
      :key (lambda () (auth-source-pass-get 'secret "ApiKeys/Openrouter"))
      :models '(openrouter/auto))
    gptel-model 'openrouter/auto))

(use-package
  avy
  :config (global-set-key (kbd "C-'") 'avy-goto-char-2))

(use-package
  markdown-mode
  :mode ("README\\.md\\'" . gfm-mode)
  :init (setq markdown-command "multimarkdown")
  :bind (:map markdown-mode-map ("C-c C-e" . markdown-do)))

(use-package
  multiple-cursors
  :bind
  (("C->" . mc/mark-next-like-this)
    ("C-<" . mc/mark-previous-like-this)
    ("C-c C-<" . mc/mark-all-like-this)))

(use-package
  orderless
  :custom (completion-styles '(orderless basic))
  (completion-category-overrides
    '((file (styles basic partial-completion)))))

(use-package sops :init (global-sops-mode 1))

(use-package super-save :config (super-save-mode +1))

(use-package tuareg :mode (("\\.ocamlinit\\'" . tuareg-mode)))

(use-package
  undo-tree
  :config
  (setq undo-tree-auto-save-history nil)
  (global-undo-tree-mode))

(use-package vertico :init (vertico-mode 1))
(use-package
  diff-hl
  :ensure t
  :init
  (add-hook 'prog-mode-hook 'turn-on-diff-hl-mode)
  (add-hook 'vc-dir-mode-hook 'turn-on-diff-hl-mode)
  :config (diff-hl-flydiff-mode 1))
(use-package
  ocaml-eglot
  :after tuareg
  :hook
  (tuareg-mode . ocaml-eglot)
  (ocaml-eglot . eglot-ensure))
(use-package
  smartparens
  :config
  (require 'smartparens-config)
  (smartparens-global-mode 1))
(use-package
  embark
  :bind
  ("C-," . embark-act)
  ("C-;" . embark-dwim)
  :config (setq prefix-help-command #'embark-prefix-help-command))
(use-package
  treesit-auto
  :config
  (treesit-auto-add-to-auto-mode-alist 'all)
  (global-treesit-auto-mode))

(use-package
  consult
  :custom
  ;; Immediately show results
  (consult-async-min-input 1)
  (consult-async-input-debounce 0)
  (consult-async-input-throttle 0)
  ;; Overlay default keybinds
  :bind (("C-s" . consult-line) ("C-x b" . consult-buffer)))

(use-package
  magit
  :config
  ;; https://github.com/magit/magit/issues/3723#issuecomment-634967479
  (transient-replace-suffix
    'magit-commit
    'magit-commit-autofixup
    '("x" "Absorb changes" magit-commit-absorb)))

(use-package
  project
  :config
  (require 'keymap)
  (require 'cl-seq)

  ;; Populate the project switcher list from `ghq`
  (dolist
    (project
      (split-string (shell-command-to-string "ghq list --full-path")
        "\n"
        t))
    (project--remember-dir (file-name-as-directory project)))

  ;; https://github.com/minad/consult/wiki#use-consult-ripgrep-instead-of-project-find-regexp-in-projectel
  (keymap-substitute
    project-prefix-map
    #'project-find-regexp
    #'consult-ripgrep)
  (cl-nsubstitute-if
    '(consult-ripgrep "Find regexp")
    (pcase-lambda (`(,cmd _))
      (eq cmd #'project-find-regexp))
    project-switch-commands)

  ;; consult-fd version of above
  (keymap-substitute
    project-prefix-map
    #'project-find-file
    #'consult-fd)
  (cl-nsubstitute-if
    '(consult-fd "Find file")
    (pcase-lambda (`(,cmd _))
      (eq cmd #'project-find-file))
    project-switch-commands))

(use-package direnv :config (direnv-mode))
(use-package editorconfig :config (editorconfig-mode 1))
(use-package
  eglot
  :hook
  (rust-ts-mode . eglot-ensure)
  (typescript-ts-mode . eglot-ensure)
  (tsx-ts-mode . eglot-ensure)
  (nix-ts-mode . eglot-ensure)
  (python-ts-mode . eglot-ensure)
  (go-ts-mode . eglot-ensure)
  :config
  (add-to-list 'eglot-server-programs '(nix-ts-mode . ("nixd")))
  (add-to-list 'eglot-server-programs '(python-ts-mode . ("pylsp")))
  (add-to-list 'eglot-server-programs '(go-ts-mode . ("gopls")))
  (add-to-list
    'eglot-server-programs
    '(kotlin-ts-mode . ("kotlin-language-server")))
  (add-to-list
    'eglot-server-programs
    '
    ((rust-ts-mode rust-mode)
      .
      ("rust-analyzer"
        :initializationOptions (:check (:command "clippy")))))
  (add-to-list
    'completion-category-overrides
    '(eglot (styles orderless))))
(use-package wgrep :custom (wgrep-auto-save-buffer t))
(use-package
  hl-todo
  :custom
  (hl-todo-keyword-faces
    `
    (
      ("TODO"
        .
        (:background "#B8860B" :foreground "white" :weight bold))
      ("FIXME"
        .
        (:background "#D32F2F" :foreground "white" :weight bold))
      (,(concat "NO" "COMMIT")
        .
        (:background "#9C27B0" :foreground "white" :weight bold))
      (,(concat "NO" "MERGE")
        .
        (:background "#C2185B" :foreground "white" :weight bold))))
  :config (global-hl-todo-mode))
(use-package
  elisp-autofmt
  :commands (elisp-autofmt-mode elisp-autofmt-buffer)
  :hook (emacs-lisp-mode . elisp-autofmt-mode)
  :custom (elisp-autofmt-style 'fixed))
;; keep-sorted end
