;; -*- lexical-binding: t; -*-

;; Core settings
(setq
      ;; Don't show the startup message
      inhibit-startup-message t

      ;; Use super-save
      auto-save-default nil

      ;; No backup files
      make-backup-files nil

      ;; Make it easy to cycle through previous items in the mark ring
      set-mark-command-repeat-pop t

      ;; Don't warn on large files
      large-file-warning-threshold nil

      ;; Follow symlinks to VC-controlled files without warning
      vc-follow-symlinks t

      ;; Don't warn on advice
      ad-redefinition-action 'accept

      ;; Revert Dired and other buffers
      global-auto-revert-non-file-buffers t

      ;; Silence compiler warnings as they can be pretty disruptive
      native-comp-async-report-warnings-errors nil

      visible-bell t
      markdown-enable-math t

      ;; Disable GUI popup
      use-dialog-box nil

      ;; Enable custom file
      custom-file (concat user-emacs-directory "custom.el")

      markdown-display-remote-images t

      use-package-always-ensure nil

      confirm-kill-emacs 'yes-or-no-p

      treesit-font-lock-level 4)

;; Enable pass for auth-source
(auth-source-pass-enable)

;; Local custom file if possible
(when (file-exists-p custom-file)
  (load custom-file))

(defun ueda/sync-ghq-to-project-el ()
  (interactive)
  (let ((paths (split-string (shell-command-to-string "ghq list --full-path") "\n" t)))
    (dolist (path paths)
      (project-remember-projects-under path))))

;; Core modes
(repeat-mode 1)                ;; Enable repeating key maps
(menu-bar-mode 0)              ;; Hide the menu bar
(tool-bar-mode 0)              ;; Hide the tool bar
(savehist-mode 1)              ;; Save minibuffer history
(scroll-bar-mode 0)            ;; Hide the scroll bar
(xterm-mouse-mode 1)           ;; Enable mouse events in terminal Emacs
(display-time-mode 1)          ;; Display time in mode line / tab bar
(column-number-mode 1)         ;; Show column number on mode line
(tab-bar-history-mode 1)       ;; Remember previous tab window configurations
(global-visual-line-mode 1)    ;; Visually wrap long lines in all buffers
(global-auto-revert-mode 1)    ;; Refresh buffers with changed local files
(global-display-line-numbers-mode t) ;; Display line numbers
(auto-save-visited-mode 1) ;; Save to original file


;; Tabs to spaces
(setq-default indent-tabs-mode nil
	            tab-width 2)

(setopt tab-always-indent 'complete
        read-buffer-completion-ignore-case t
        read-file-name-completion-ignore-case t
        completion-cycle-threshold t)

;; auto-mode-alist entries
(add-to-list 'auto-mode-alist '("\\.ts\\'" . typescript-ts-mode))
(add-to-list 'auto-mode-alist '("\\.tsx\\'" . tsx-ts-mode))
(add-to-list 'auto-mode-alist '("\\.nix\\'" . nix-ts-mode))
(add-to-list 'auto-mode-alist '("\\.yaml\\'" . yaml-ts-mode))
(add-to-list 'auto-mode-alist '("\\.py\\'" . python-ts-mode))
(add-to-list 'auto-mode-alist '("\\.json\\'" . json-ts-mode))
(add-to-list 'auto-mode-alist '("\\.go\\'" . go-ts-mode))
(add-to-list 'auto-mode-alist '("\\.kt\\'" . kotlin-ts-mode))
(add-to-list 'auto-mode-alist '("\\.kts\\'" . kotlin-ts-mode))
(add-to-list 'auto-mode-alist '("\\.rs\\'" . rust-ts-mode))
(add-to-list 'auto-mode-alist '("\\.typ\\'" . typst-ts-mode))

(use-package super-save
  :config
  (super-save-mode +1))

(use-package sops
  :init
  (global-sops-mode 1))

(use-package markdown-mode
  :mode ("README\\.md\\'" . gfm-mode)
  :init (setq markdown-command "multimarkdown")
  :bind (:map markdown-mode-map
         ("C-c C-e" . markdown-do)))

(use-package tuareg
  :mode (("\\.ocamlinit\\'" . tuareg-mode)))

(use-package eglot
  :hook
  (rust-ts-mode . eglot-ensure)
  (typescript-ts-mode . eglot-ensure)
  (tsx-ts-mode . eglot-ensure)
  (nix-ts-mode . eglot-ensure)
  (python-ts-mode . eglot-ensure)
  (go-ts-mode . eglot-ensure)
  :config
  (add-to-list 'eglot-server-programs
               '(nix-ts-mode . ("nixd")))
  (add-to-list 'eglot-server-programs
               '(python-ts-mode . ("pylsp")))
  (add-to-list 'eglot-server-programs
               '(go-ts-mode . ("gopls")))
  (add-to-list 'eglot-server-programs
               '(kotlin-ts-mode . ("kotlin-language-server")))
  (add-to-list 'eglot-server-programs
             '((rust-ts-mode rust-mode) .
               ("rust-analyzer" :initializationOptions (:check (:command "clippy")))))
  (setq completion-category-overrides '((eglot (styles . (orderless))))))

(use-package ocaml-eglot
  :after tuareg
  :hook
  (tuareg-mode . ocaml-eglot)
  (ocaml-eglot . eglot-ensure))

(use-package smartparens
  :config
  (require 'smartparens-config)
  (smartparens-global-mode 1))

(use-package editorconfig
  :config
  (editorconfig-mode 1))

(use-package vertico
  :init
  (vertico-mode 1))

(use-package orderless
  :custom
  (completion-styles '(orderless basic))
  (completion-category-overrides '((file (styles basic partial-completion)))))

(use-package consult
  :custom
  (consult-async-min-input 1)
  (consult-async-input-debounce 0)
  (consult-async-input-throttle 0)
  :bind (("C-s" . consult-line)
         ("C-x b" . consult-buffer)
         ("C-c f" . consult-fd)
         ("C-c r" . consult-ripgrep)))

(use-package embark
  :bind
  ("C-," . embark-act)
  ("C-;" . embark-dwim)
  :config
  (setq prefix-help-command #'embark-prefix-help-command))

(use-package embark-consult
  :hook
  (embark-collect-mode . consult-preview-at-point-mode))

(use-package wgrep
  :custom
  (wgrep-auto-save-buffer t))

(use-package corfu
  :custom
  (corfu-auto t)
  (corfu-auto-prefix 1)
  (corfu-cycle t)
  :init
  (global-corfu-mode))

(use-package git-gutter
  :init
  (global-git-gutter-mode t))

(when (memq window-system '(mac ns x))
  (exec-path-from-shell-initialize)
  (exec-path-from-shell-copy-envs '("SSH_AUTH_SOCK")))

(use-package direnv
  :config
  (direnv-mode))

(use-package undo-tree
  :config
  (setq undo-tree-auto-save-history nil)
  (global-undo-tree-mode))

(use-package multiple-cursors
  :bind (("C->" . mc/mark-next-like-this)
         ("C-<" . mc/mark-previous-like-this)
         ("C-c C-<" . mc/mark-all-like-this)))

(use-package gptel
  :config
  (setq
     gptel-backend
       (gptel-make-openai "OpenRouter"
         :host "openrouter.ai"
         :endpoint "/api/v1/chat/completions"
         :stream t
         :key (lambda ()
                (auth-source-pass-get 'secret "ApiKeys/Openrouter"))
         :models '(openrouter/auto))
     gptel-model 'openrouter/auto))

(use-package avy
  :config
  (global-set-key (kbd "C-'") 'avy-goto-char-2))

;; Causes Emacs to freeze
(global-unset-key [C-wheel-up])
(global-unset-key [C-wheel-down])

(keyboard-translate ?\C-h ?\C-?)

(defun ueda/irc-connect ()
  (interactive)
  (erc-tls
   :server "irc.libera.chat"
   :port 6697
   :nick "ueda"
   :password (auth-source-pass-get 'secret "InternetAccounts/libera")))
