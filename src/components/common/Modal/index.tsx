"use client";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment } from "react";
import { RxCross2 } from "react-icons/rx";

interface IProps {
  className?: string;
  children: React.ReactNode;
  show: boolean;
  hide: any;
}

function Modal({ show, hide, children, className }: IProps) {
  return (
    <div>
      <Transition.Root show={show} as={Fragment}>
        <Dialog as="div" className="fixed z-50 inset-0" onClose={hide}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30"
          />
          <div
            className="fixed inset-0 flex w-screen items-center justify-center p-4 bd"
            onClick={hide}
          >
            <DialogPanel
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`${className} space-y-10 px-5 pb-10 bg-[#101828] relative rounded-[20px] drop-shadow-2xl border border-[#38434D] text-left overflow-hidden shadow-2xl transform transition-all align-middle overflow-y-auto max-h-full`}
            >
              <div className="absolute top-5 right-2.5">
                <button
                  type="button"
                  className="text-white text-xl hover:text-blue-500 focus:outline-none transition-colors duration-300"
                  onClick={hide}
                >
                  <span className="sr-only">Close</span>
                  <RxCross2 className="text-xl" />
                </button>
              </div>
              <div className="text-white mt-10">{children}</div>
            </DialogPanel>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default Modal;
