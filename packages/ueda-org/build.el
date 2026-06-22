(require 'ox-publish)

(defvar base-dir (car argv))
(defvar out-dir  (cadr argv))

(setq org-publish-project-alist
      `(("org-pages"
         :base-directory        ,base-dir
         :base-extension        "org"
         :publishing-directory  ,out-dir
         :recursive             t
         :publishing-function   org-html-publish-to-html

         ;; structure
         :section-numbers       nil
         :with-toc              nil
         :html-postamble        nil

         ;; styling
         :html-doctype          "html5"
         :html-html5-fancy      t
         :html-head "<link rel='stylesheet' href='/style.css' />"
         :html-head-include-default-style  nil
         :html-head-include-scripts        nil)

        ("all" :components ("org-pages"))))

(org-publish-project "all" t)
